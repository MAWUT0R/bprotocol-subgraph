import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ChickenSet,
  GemSellerSet,
  OwnershipTransferred,
  ParamsSet,
  PendingGemSellerSet,
  RebalanceSwap,
  UserDeposit,
  UserWithdraw
} from "../generated/BAMMChickenBonds/BAMMChickenBonds"

export function createChickenSetEvent(chicken: Address): ChickenSet {
  let chickenSetEvent = changetype<ChickenSet>(newMockEvent())

  chickenSetEvent.parameters = new Array()

  chickenSetEvent.parameters.push(
    new ethereum.EventParam("chicken", ethereum.Value.fromAddress(chicken))
  )

  return chickenSetEvent
}

export function createGemSellerSetEvent(seller: Address): GemSellerSet {
  let gemSellerSetEvent = changetype<GemSellerSet>(newMockEvent())

  gemSellerSetEvent.parameters = new Array()

  gemSellerSetEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return gemSellerSetEvent
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

export function createPendingGemSellerSetEvent(
  pendingSeller: Address,
  time: BigInt
): PendingGemSellerSet {
  let pendingGemSellerSetEvent = changetype<PendingGemSellerSet>(newMockEvent())

  pendingGemSellerSetEvent.parameters = new Array()

  pendingGemSellerSetEvent.parameters.push(
    new ethereum.EventParam(
      "pendingSeller",
      ethereum.Value.fromAddress(pendingSeller)
    )
  )
  pendingGemSellerSetEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return pendingGemSellerSetEvent
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

export function createUserDepositEvent(
  user: Address,
  lusdAmount: BigInt
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

  return userDepositEvent
}

export function createUserWithdrawEvent(
  user: Address,
  lusdAmount: BigInt
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

  return userWithdrawEvent
}
