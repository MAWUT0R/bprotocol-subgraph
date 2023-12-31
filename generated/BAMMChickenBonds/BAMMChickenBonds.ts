// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ChickenSet extends ethereum.Event {
  get params(): ChickenSet__Params {
    return new ChickenSet__Params(this);
  }
}

export class ChickenSet__Params {
  _event: ChickenSet;

  constructor(event: ChickenSet) {
    this._event = event;
  }

  get chicken(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GemSellerSet extends ethereum.Event {
  get params(): GemSellerSet__Params {
    return new GemSellerSet__Params(this);
  }
}

export class GemSellerSet__Params {
  _event: GemSellerSet;

  constructor(event: GemSellerSet) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ParamsSet extends ethereum.Event {
  get params(): ParamsSet__Params {
    return new ParamsSet__Params(this);
  }
}

export class ParamsSet__Params {
  _event: ParamsSet;

  constructor(event: ParamsSet) {
    this._event = event;
  }

  get A(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PendingGemSellerSet extends ethereum.Event {
  get params(): PendingGemSellerSet__Params {
    return new PendingGemSellerSet__Params(this);
  }
}

export class PendingGemSellerSet__Params {
  _event: PendingGemSellerSet;

  constructor(event: PendingGemSellerSet) {
    this._event = event;
  }

  get pendingSeller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get time(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RebalanceSwap extends ethereum.Event {
  get params(): RebalanceSwap__Params {
    return new RebalanceSwap__Params(this);
  }
}

export class RebalanceSwap__Params {
  _event: RebalanceSwap;

  constructor(event: RebalanceSwap) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lusdAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ethAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class UserDeposit extends ethereum.Event {
  get params(): UserDeposit__Params {
    return new UserDeposit__Params(this);
  }
}

export class UserDeposit__Params {
  _event: UserDeposit;

  constructor(event: UserDeposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lusdAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UserWithdraw extends ethereum.Event {
  get params(): UserWithdraw__Params {
    return new UserWithdraw__Params(this);
  }
}

export class UserWithdraw__Params {
  _event: UserWithdraw;

  constructor(event: UserWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lusdAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BAMMChickenBonds__getLUSDValueResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getTotalLUSDValue(): BigInt {
    return this.value0;
  }

  getLusdBalance(): BigInt {
    return this.value1;
  }

  getEthLUSDValue(): BigInt {
    return this.value2;
  }
}

export class BAMMChickenBonds__getSwapEthAmountResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getEthAmount(): BigInt {
    return this.value0;
  }

  getFeeLusdAmount(): BigInt {
    return this.value1;
  }
}

export class BAMMChickenBonds extends ethereum.SmartContract {
  static bind(address: Address): BAMMChickenBonds {
    return new BAMMChickenBonds("BAMMChickenBonds", address);
  }

  A(): BigInt {
    let result = super.call("A", "A():(uint256)", []);

    return result[0].toBigInt();
  }

  try_A(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("A", "A():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  LUSD(): Address {
    let result = super.call("LUSD", "LUSD():(address)", []);

    return result[0].toAddress();
  }

  try_LUSD(): ethereum.CallResult<Address> {
    let result = super.tryCall("LUSD", "LUSD():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  MAX_A(): BigInt {
    let result = super.call("MAX_A", "MAX_A():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_A(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_A", "MAX_A():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_FEE(): BigInt {
    let result = super.call("MAX_FEE", "MAX_FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_FEE", "MAX_FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_A(): BigInt {
    let result = super.call("MIN_A", "MIN_A():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_A(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_A", "MIN_A():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRECISION(): BigInt {
    let result = super.call("PRECISION", "PRECISION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRECISION", "PRECISION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SP(): Address {
    let result = super.call("SP", "SP():(address)", []);

    return result[0].toAddress();
  }

  try_SP(): ethereum.CallResult<Address> {
    let result = super.tryCall("SP", "SP():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  chicken(): Address {
    let result = super.call("chicken", "chicken():(address)", []);

    return result[0].toAddress();
  }

  try_chicken(): ethereum.CallResult<Address> {
    let result = super.tryCall("chicken", "chicken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  compensateForLusdDeviation(ethAmount: BigInt): BigInt {
    let result = super.call(
      "compensateForLusdDeviation",
      "compensateForLusdDeviation(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(ethAmount)]
    );

    return result[0].toBigInt();
  }

  try_compensateForLusdDeviation(
    ethAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "compensateForLusdDeviation",
      "compensateForLusdDeviation(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(ethAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feePool(): Address {
    let result = super.call("feePool", "feePool():(address)", []);

    return result[0].toAddress();
  }

  try_feePool(): ethereum.CallResult<Address> {
    let result = super.tryCall("feePool", "feePool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fetchPrice(): BigInt {
    let result = super.call("fetchPrice", "fetchPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fetchPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fetchPrice", "fetchPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  frontEndTag(): Address {
    let result = super.call("frontEndTag", "frontEndTag():(address)", []);

    return result[0].toAddress();
  }

  try_frontEndTag(): ethereum.CallResult<Address> {
    let result = super.tryCall("frontEndTag", "frontEndTag():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gem(): Address {
    let result = super.call("gem", "gem():(address)", []);

    return result[0].toAddress();
  }

  try_gem(): ethereum.CallResult<Address> {
    let result = super.tryCall("gem", "gem():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gemSeller(): Address {
    let result = super.call("gemSeller", "gemSeller():(address)", []);

    return result[0].toAddress();
  }

  try_gemSeller(): ethereum.CallResult<Address> {
    let result = super.tryCall("gemSeller", "gemSeller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getConversionRate(
    param0: Address,
    param1: Address,
    srcQty: BigInt,
    param3: BigInt
  ): BigInt {
    let result = super.call(
      "getConversionRate",
      "getConversionRate(address,address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(srcQty),
        ethereum.Value.fromUnsignedBigInt(param3)
      ]
    );

    return result[0].toBigInt();
  }

  try_getConversionRate(
    param0: Address,
    param1: Address,
    srcQty: BigInt,
    param3: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getConversionRate",
      "getConversionRate(address,address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(srcQty),
        ethereum.Value.fromUnsignedBigInt(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLUSDValue(): BAMMChickenBonds__getLUSDValueResult {
    let result = super.call(
      "getLUSDValue",
      "getLUSDValue():(uint256,uint256,uint256)",
      []
    );

    return new BAMMChickenBonds__getLUSDValueResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getLUSDValue(): ethereum.CallResult<
    BAMMChickenBonds__getLUSDValueResult
  > {
    let result = super.tryCall(
      "getLUSDValue",
      "getLUSDValue():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BAMMChickenBonds__getLUSDValueResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getReturn(
    xQty: BigInt,
    xBalance: BigInt,
    yBalance: BigInt,
    A: BigInt
  ): BigInt {
    let result = super.call(
      "getReturn",
      "getReturn(uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(xQty),
        ethereum.Value.fromUnsignedBigInt(xBalance),
        ethereum.Value.fromUnsignedBigInt(yBalance),
        ethereum.Value.fromUnsignedBigInt(A)
      ]
    );

    return result[0].toBigInt();
  }

  try_getReturn(
    xQty: BigInt,
    xBalance: BigInt,
    yBalance: BigInt,
    A: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReturn",
      "getReturn(uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(xQty),
        ethereum.Value.fromUnsignedBigInt(xBalance),
        ethereum.Value.fromUnsignedBigInt(yBalance),
        ethereum.Value.fromUnsignedBigInt(A)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSumFixedPoint(x: BigInt, y: BigInt, A: BigInt): BigInt {
    let result = super.call(
      "getSumFixedPoint",
      "getSumFixedPoint(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y),
        ethereum.Value.fromUnsignedBigInt(A)
      ]
    );

    return result[0].toBigInt();
  }

  try_getSumFixedPoint(
    x: BigInt,
    y: BigInt,
    A: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSumFixedPoint",
      "getSumFixedPoint(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(x),
        ethereum.Value.fromUnsignedBigInt(y),
        ethereum.Value.fromUnsignedBigInt(A)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSwapEthAmount(lusdQty: BigInt): BAMMChickenBonds__getSwapEthAmountResult {
    let result = super.call(
      "getSwapEthAmount",
      "getSwapEthAmount(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(lusdQty)]
    );

    return new BAMMChickenBonds__getSwapEthAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getSwapEthAmount(
    lusdQty: BigInt
  ): ethereum.CallResult<BAMMChickenBonds__getSwapEthAmountResult> {
    let result = super.tryCall(
      "getSwapEthAmount",
      "getSwapEthAmount(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(lusdQty)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BAMMChickenBonds__getSwapEthAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lusd2UsdPriceAggregator(): Address {
    let result = super.call(
      "lusd2UsdPriceAggregator",
      "lusd2UsdPriceAggregator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_lusd2UsdPriceAggregator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lusd2UsdPriceAggregator",
      "lusd2UsdPriceAggregator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxDiscount(): BigInt {
    let result = super.call("maxDiscount", "maxDiscount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxDiscount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxDiscount", "maxDiscount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingGemSeller(): Address {
    let result = super.call(
      "pendingGemSeller",
      "pendingGemSeller():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_pendingGemSeller(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pendingGemSeller",
      "pendingGemSeller():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingGemSellerUpdateTime(): BigInt {
    let result = super.call(
      "pendingGemSellerUpdateTime",
      "pendingGemSellerUpdateTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_pendingGemSellerUpdateTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingGemSellerUpdateTime",
      "pendingGemSellerUpdateTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  priceAggregator(): Address {
    let result = super.call(
      "priceAggregator",
      "priceAggregator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_priceAggregator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "priceAggregator",
      "priceAggregator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swap(lusdAmount: BigInt, minEthReturn: BigInt, dest: Address): BigInt {
    let result = super.call("swap", "swap(uint256,uint256,address):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(lusdAmount),
      ethereum.Value.fromUnsignedBigInt(minEthReturn),
      ethereum.Value.fromAddress(dest)
    ]);

    return result[0].toBigInt();
  }

  try_swap(
    lusdAmount: BigInt,
    minEthReturn: BigInt,
    dest: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "swap",
      "swap(uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(lusdAmount),
        ethereum.Value.fromUnsignedBigInt(minEthReturn),
        ethereum.Value.fromAddress(dest)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timelockDuration(): BigInt {
    let result = super.call(
      "timelockDuration",
      "timelockDuration():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_timelockDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timelockDuration",
      "timelockDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _priceAggregator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _lusd2UsdPriceAggregator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _SP(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _LUSD(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _LQTY(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _maxDiscount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _feePool(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _frontEndTag(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _timelockDuration(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CompoundCall extends ethereum.Call {
  get inputs(): CompoundCall__Inputs {
    return new CompoundCall__Inputs(this);
  }

  get outputs(): CompoundCall__Outputs {
    return new CompoundCall__Outputs(this);
  }
}

export class CompoundCall__Inputs {
  _call: CompoundCall;

  constructor(call: CompoundCall) {
    this._call = call;
  }

  get lusdAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CompoundCall__Outputs {
  _call: CompoundCall;

  constructor(call: CompoundCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get lusdAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class HarvestCall extends ethereum.Call {
  get inputs(): HarvestCall__Inputs {
    return new HarvestCall__Inputs(this);
  }

  get outputs(): HarvestCall__Outputs {
    return new HarvestCall__Outputs(this);
  }
}

export class HarvestCall__Inputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }
}

export class HarvestCall__Outputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }
}

export class SetChickenCall extends ethereum.Call {
  get inputs(): SetChickenCall__Inputs {
    return new SetChickenCall__Inputs(this);
  }

  get outputs(): SetChickenCall__Outputs {
    return new SetChickenCall__Outputs(this);
  }
}

export class SetChickenCall__Inputs {
  _call: SetChickenCall;

  constructor(call: SetChickenCall) {
    this._call = call;
  }

  get _chicken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetChickenCall__Outputs {
  _call: SetChickenCall;

  constructor(call: SetChickenCall) {
    this._call = call;
  }
}

export class SetParamsCall extends ethereum.Call {
  get inputs(): SetParamsCall__Inputs {
    return new SetParamsCall__Inputs(this);
  }

  get outputs(): SetParamsCall__Outputs {
    return new SetParamsCall__Outputs(this);
  }
}

export class SetParamsCall__Inputs {
  _call: SetParamsCall;

  constructor(call: SetParamsCall) {
    this._call = call;
  }

  get _A(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetParamsCall__Outputs {
  _call: SetParamsCall;

  constructor(call: SetParamsCall) {
    this._call = call;
  }
}

export class SetPendingSellerCall extends ethereum.Call {
  get inputs(): SetPendingSellerCall__Inputs {
    return new SetPendingSellerCall__Inputs(this);
  }

  get outputs(): SetPendingSellerCall__Outputs {
    return new SetPendingSellerCall__Outputs(this);
  }
}

export class SetPendingSellerCall__Inputs {
  _call: SetPendingSellerCall;

  constructor(call: SetPendingSellerCall) {
    this._call = call;
  }

  get _pendingSeller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPendingSellerCall__Outputs {
  _call: SetPendingSellerCall;

  constructor(call: SetPendingSellerCall) {
    this._call = call;
  }
}

export class SetSellerCall extends ethereum.Call {
  get inputs(): SetSellerCall__Inputs {
    return new SetSellerCall__Inputs(this);
  }

  get outputs(): SetSellerCall__Outputs {
    return new SetSellerCall__Outputs(this);
  }
}

export class SetSellerCall__Inputs {
  _call: SetSellerCall;

  constructor(call: SetSellerCall) {
    this._call = call;
  }

  get _seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSellerCall__Outputs {
  _call: SetSellerCall;

  constructor(call: SetSellerCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get lusdAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minEthReturn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get dest(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TradeCall extends ethereum.Call {
  get inputs(): TradeCall__Inputs {
    return new TradeCall__Inputs(this);
  }

  get outputs(): TradeCall__Outputs {
    return new TradeCall__Outputs(this);
  }
}

export class TradeCall__Inputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get srcAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get destAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get value4(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get value5(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }
}

export class TradeCall__Outputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get lusdAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
