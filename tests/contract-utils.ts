import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { CampaignLog } from "../generated/Contract/Contract"

export function createCampaignLogEvent(
  campaignID: BigInt,
  receiver: Address,
  goal: BigInt
): CampaignLog {
  let campaignLogEvent = changetype<CampaignLog>(newMockEvent())

  campaignLogEvent.parameters = new Array()

  campaignLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignID",
      ethereum.Value.fromUnsignedBigInt(campaignID)
    )
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("goal", ethereum.Value.fromUnsignedBigInt(goal))
  )

  return campaignLogEvent
}
