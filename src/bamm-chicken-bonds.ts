import {
  ChickenSet as ChickenSetEvent,
  GemSellerSet as GemSellerSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ParamsSet as ParamsSetEvent,
  PendingGemSellerSet as PendingGemSellerSetEvent,
  RebalanceSwap as RebalanceSwapEvent,
  UserDeposit as UserDepositEvent,
  UserWithdraw as UserWithdrawEvent
} from "../generated/BAMMChickenBonds/BAMMChickenBonds"
import {
  BAMMChickenBondsOwnershipTransferred,
  BAMMChickenBondsParamsSet,
  BAMMChickenBondsRebalanceSwap,
  BAMMChickenBondsUserDeposit,
  BAMMChickenBondsUserWithdraw,
  ChickenSet,
  GemSellerSet,
  OwnershipTransferred,
  ParamsSet,
  PendingGemSellerSet,
  RebalanceSwap,
  UserDeposit,
  UserWithdraw
} from "../generated/schema"

export function handleChickenSet(event: ChickenSetEvent): void {
  let entity = new ChickenSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chicken = event.params.chicken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGemSellerSet(event: GemSellerSetEvent): void {
  let entity = new GemSellerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new BAMMChickenBondsOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleParamsSet(event: ParamsSetEvent): void {
  let entity = new BAMMChickenBondsParamsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.A = event.params.A
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePendingGemSellerSet(
  event: PendingGemSellerSetEvent
): void {
  let entity = new PendingGemSellerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingSeller = event.params.pendingSeller
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalanceSwap(event: RebalanceSwapEvent): void {
  let entity = new BAMMChickenBondsRebalanceSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.lusdAmount = event.params.lusdAmount
  entity.ethAmount = event.params.ethAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserDeposit(event: UserDepositEvent): void {
  let entity = new BAMMChickenBondsUserDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.lusdAmount = event.params.lusdAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserWithdraw(event: UserWithdrawEvent): void {
  let entity = new BAMMChickenBondsUserWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.lusdAmount = event.params.lusdAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
