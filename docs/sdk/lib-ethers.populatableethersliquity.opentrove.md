<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@liquity/lib-ethers](./lib-ethers.md) &gt; [PopulatableEthersLiquity](./lib-ethers.populatableethersliquity.md) &gt; [openTrove](./lib-ethers.populatableethersliquity.opentrove.md)

## PopulatableEthersLiquity.openTrove() method

Open a new Trove by depositing collateral and borrowing LUSD.

**Signature:**

```typescript
openTrove(params: TroveCreationParams<Decimalish>, maxBorrowingRateOrOptionalParams?: Decimalish | BorrowingOperationOptionalParams, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersLiquityTransaction<TroveCreationDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | [TroveCreationParams](./lib-base.trovecreationparams.md)<!-- -->&lt;[Decimalish](./lib-base.decimalish.md)<!-- -->&gt; | How much to deposit and borrow. |
|  maxBorrowingRateOrOptionalParams | [Decimalish](./lib-base.decimalish.md) \| [BorrowingOperationOptionalParams](./lib-ethers.borrowingoperationoptionalparams.md) |  |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

**Returns:**

Promise&lt;[PopulatedEthersLiquityTransaction](./lib-ethers.populatedethersliquitytransaction.md)<!-- -->&lt;[TroveCreationDetails](./lib-base.trovecreationdetails.md)<!-- -->&gt;&gt;

## Remarks

If `maxBorrowingRate` is omitted, the current borrowing rate plus 0.5% is used as maximum acceptable rate.

