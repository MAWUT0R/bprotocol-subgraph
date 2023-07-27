import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { Exit } from "../generated/schema"
import { Exit as ExitEvent } from "../generated/BAMM/BAMM"
import { handleExit } from "../src/bamm"
import { createExitEvent } from "./bamm-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let val = BigInt.fromI32(234)
    let newExitEvent = createExitEvent(val)
    handleExit(newExitEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Exit created and stored", () => {
    assert.entityCount("Exit", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Exit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "val",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
