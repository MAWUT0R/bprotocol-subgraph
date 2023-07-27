import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ChickenSet } from "../generated/schema"
import { ChickenSet as ChickenSetEvent } from "../generated/BAMMChickenBonds/BAMMChickenBonds"
import { handleChickenSet } from "../src/bamm-chicken-bonds"
import { createChickenSetEvent } from "./bamm-chicken-bonds-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let chicken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newChickenSetEvent = createChickenSetEvent(chicken)
    handleChickenSet(newChickenSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChickenSet created and stored", () => {
    assert.entityCount("ChickenSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChickenSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "chicken",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
