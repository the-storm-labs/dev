<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@liquity/lib-ethers](./lib-ethers.md) &gt; [PopulatableEthersLiquity](./lib-ethers.populatableethersliquity.md) &gt; [borrowLUSD](./lib-ethers.populatableethersliquity.borrowlusd.md)

## PopulatableEthersLiquity.borrowLUSD() method

Adjust existing Trove by borrowing more LUSD.

**Signature:**

```typescript
borrowLUSD(amount: Decimalish, maxBorrowingRate?: Decimalish, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersLiquityTransaction<TroveAdjustmentDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | The amount of LUSD to borrow. |
|  maxBorrowingRate | [Decimalish](./lib-base.decimalish.md) | Maximum acceptable [borrowing rate](./lib-base.fees.borrowingrate.md)<!-- -->. |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

**Returns:**

Promise&lt;[PopulatedEthersLiquityTransaction](./lib-ethers.populatedethersliquitytransaction.md)<!-- -->&lt;[TroveAdjustmentDetails](./lib-base.troveadjustmentdetails.md)<!-- -->&gt;&gt;

## Remarks

Equivalent to:

```typescript
adjustTrove({ borrowLUSD: amount }, maxBorrowingRate)
```

