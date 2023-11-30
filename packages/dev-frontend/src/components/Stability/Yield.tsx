import React, { useEffect, useState } from "react";
import { Card, Paragraph, Text } from "theme-ui";
import { Decimal, LiquityStoreState } from "@liquity/lib-base";
import { useLiquitySelector } from "@liquity/lib-react";
import { InfoIcon } from "../InfoIcon";
import { Badge } from "../Badge";
import { fetchLqtyPrice } from "./context/fetchLqtyPrice";

const selector = ({ lusdInStabilityPool, remainingStabilityPoolLQTYReward }: LiquityStoreState) => ({
  lusdInStabilityPool,
  remainingStabilityPoolLQTYReward
});

const yearlyIssuanceFraction = 0.5;
const dailyIssuanceFraction = Decimal.from(1 - yearlyIssuanceFraction ** (1 / 365));
const dailyIssuancePercentage = dailyIssuanceFraction.mul(100);

export const Yield: React.FC = () => {
  const { lusdInStabilityPool, remainingStabilityPoolLQTYReward } = useLiquitySelector(selector);

  const [IBKPrice, setIBKPrice] = useState<Decimal | undefined>(undefined);
  const hasZeroValue = remainingStabilityPoolLQTYReward.isZero || lusdInStabilityPool.isZero;

  useEffect(() => {
    (async () => {
      try {
        const { lqtyPriceUSD } = await fetchLqtyPrice();
        setIBKPrice(lqtyPriceUSD);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (hasZeroValue || IBKPrice === undefined) return null;

  const IBKIssuanceOneDay = remainingStabilityPoolLQTYReward.mul(dailyIssuanceFraction);
  const IBKIssuanceOneDayInUSD = IBKIssuanceOneDay.mul(IBKPrice);
  const aprPercentage = IBKIssuanceOneDayInUSD.mulDiv(365 * 100, lusdInStabilityPool);
  const remainingIBKInUSD = remainingStabilityPoolLQTYReward.mul(IBKPrice);

  if (aprPercentage.isZero) return null;

  return (
    <Badge>
      <Text>IBK APR {aprPercentage.toString(2)}%</Text>
      <InfoIcon
        tooltip={
          <Card variant="tooltip" sx={{ width: ["220px", "518px"] }}>
            <Paragraph>
              An <Text sx={{ fontWeight: "bold" }}>estimate</Text> of the IBK return on the IBRL
              deposited to the Stability Pool over the next year, not including your ETH gains from
              liquidations.
            </Paragraph>
            <Paragraph sx={{ fontSize: "12px", fontFamily: "monospace", mt: 2 }}>
              ($IBK_REWARDS * DAILY_ISSUANCE% / DEPOSITED_IBRL) * 365 * 100 ={" "}
              <Text sx={{ fontWeight: "bold" }}> APR</Text>
            </Paragraph>
            <Paragraph sx={{ fontSize: "12px", fontFamily: "monospace" }}>
              ($
              {remainingIBKInUSD.shorten()} * {dailyIssuancePercentage.toString(4)}% / $
              {lusdInStabilityPool.shorten()}) * 365 * 100 =
              <Text sx={{ fontWeight: "bold" }}> {aprPercentage.toString(2)}%</Text>
            </Paragraph>
          </Card>
        }
      ></InfoIcon>
    </Badge>
  );
};
