import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Exit,
  Flee,
  Join,
  OwnershipTransferred,
  ParamsSet,
  RebalanceSwap,
  Tack,
  Transfer,
  UserDeposit,
  UserWithdraw
} from "../generated/PBAMM/PBAMM"

export function createExitEvent(val: BigInt): Exit {
  let exitEvent = changetype<Exit>(newMockEvent())

  exitEvent.parameters = new Array()

  exitEvent.parameters.push(
    new ethereum.EventParam("val", ethereum.Value.fromUnsignedBigInt(val))
  )

  return exitEvent
}

export function createFleeEvent(): Flee {
  let fleeEvent = changetype<Flee>(newMockEvent())

  fleeEvent.parameters = new Array()

  return fleeEvent
}

export function createJoinEvent(val: BigInt): Join {
  let joinEvent = changetype<Join>(newMockEvent())

  joinEvent.parameters = new Array()

  joinEvent.parameters.push(
    new ethereum.EventParam("val", ethereum.Value.fromUnsignedBigInt(val))
  )

  return joinEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createParamsSetEvent(A: BigInt, fee: BigInt): ParamsSet {
  let paramsSetEvent = changetype<ParamsSet>(newMockEvent())

  paramsSetEvent.parameters = new Array()

  paramsSetEvent.parameters.push(
    new ethereum.EventParam("A", ethereum.Value.fromUnsignedBigInt(A))
  )
  paramsSetEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return paramsSetEvent
}

export function createRebalanceSwapEvent(
  user: Address,
  lusdAmount: BigInt,
  ethAmount: BigInt,
  timestamp: BigInt
): RebalanceSwap {
  let rebalanceSwapEvent = changetype<RebalanceSwap>(newMockEvent())

  rebalanceSwapEvent.parameters = new Array()

  rebalanceSwapEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rebalanceSwapEvent.parameters.push(
    new ethereum.EventParam(
      "lusdAmount",
      ethereum.Value.fromUnsignedBigInt(lusdAmount)
    )
  )
  rebalanceSwapEvent.parameters.push(
    new ethereum.EventParam(
      "ethAmount",
      ethereum.Value.fromUnsignedBigInt(ethAmount)
    )
  )
  rebalanceSwapEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return rebalanceSwapEvent
}

export function createTackEvent(src: Address, dst: Address, wad: BigInt): Tack {
  let tackEvent = changetype<Tack>(newMockEvent())

  tackEvent.parameters = new Array()

  tackEvent.parameters.push(
    new ethereum.EventParam("src", ethereum.Value.fromAddress(src))
  )
  tackEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )
  tackEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )

  return tackEvent
}

export function createTransferEvent(
  _from: Address,
  _to: Address,
  _value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return transferEvent
}

export function createUserDepositEvent(
  user: Address,
  lusdAmount: BigInt,
  numShares: BigInt
): UserDeposit {
  let userDepositEvent = changetype<UserDeposit>(newMockEvent())

  userDepositEvent.parameters = new Array()

  userDepositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userDepositEvent.parameters.push(
    new ethereum.EventParam(
      "lusdAmount",
      ethereum.Value.fromUnsignedBigInt(lusdAmount)
    )
  )
  userDepositEvent.parameters.push(
    new ethereum.EventParam(
      "numShares",
      ethereum.Value.fromUnsignedBigInt(numShares)
    )
  )

  return userDepositEvent
}

export function createUserWithdrawEvent(
  user: Address,
  lusdAmount: BigInt,
  ethAmount: BigInt,
  numShares: BigInt
): UserWithdraw {
  let userWithdrawEvent = changetype<UserWithdraw>(newMockEvent())

  userWithdrawEvent.parameters = new Array()

  userWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "lusdAmount",
      ethereum.Value.fromUnsignedBigInt(lusdAmount)
    )
  )
  userWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "ethAmount",
      ethereum.Value.fromUnsignedBigInt(ethAmount)
    )
  )
  userWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "numShares",
      ethereum.Value.fromUnsignedBigInt(numShares)
    )
  )

  return userWithdrawEvent
}
