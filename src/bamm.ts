import {
  Exit as ExitEvent,
  Flee as FleeEvent,
  Join as JoinEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ParamsSet as ParamsSetEvent,
  RebalanceSwap as RebalanceSwapEvent,
  Tack as TackEvent,
  Transfer as TransferEvent,
  UserDeposit as UserDepositEvent,
  UserWithdraw as UserWithdrawEvent
} from "../generated/BAMM/BAMM"
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
} from "../generated/schema"

export function handleExit(event: ExitEvent): void {
  let entity = new Exit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.val = event.params.val

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlee(event: FleeEvent): void {
  let entity = new Flee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJoin(event: JoinEvent): void {
  let entity = new Join(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.val = event.params.val

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
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
  let entity = new ParamsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.A = event.params.A
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalanceSwap(event: RebalanceSwapEvent): void {
  let entity = new RebalanceSwap(
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

export function handleTack(event: TackEvent): void {
  let entity = new Tack(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.src = event.params.src
  entity.dst = event.params.dst
  entity.wad = event.params.wad

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserDeposit(event: UserDepositEvent): void {
  let entity = new UserDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.lusdAmount = event.params.lusdAmount
  entity.numShares = event.params.numShares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserWithdraw(event: UserWithdrawEvent): void {
  let entity = new UserWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.lusdAmount = event.params.lusdAmount
  entity.ethAmount = event.params.ethAmount
  entity.numShares = event.params.numShares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
