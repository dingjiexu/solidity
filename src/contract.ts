import { CampaignLog as CampaignLogEvent } from "../generated/Contract/Contract"
import { CampaignLog } from "../generated/schema"

export function handleCampaignLog(event: CampaignLogEvent): void {
  let entity = new CampaignLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignID = event.params.campaignID
  entity.receiver = event.params.receiver
  entity.goal = event.params.goal

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
