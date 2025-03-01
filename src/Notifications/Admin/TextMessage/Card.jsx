import { getJsonHtml } from "App"
import {
    LabelValue,
    LabelValues,
    MultiCol,
} from "Panel"
import { DateTime } from "List"

const Card = entity => <>
    <MultiCol>
        <LabelValue
            label="NotificationsReceptor"
            value={entity.receiver}
        />
        <LabelValue
            label="NotificationsDate"
            value={<DateTime
                date={entity.utcDate}
                row
            />}
        />
        <LabelValue
            label="NotificationsReceivedByTheExternalApi"
            value={entity.receivedByTheExternalApi}
        />
        <LabelValue
            label="NotificationsReceived"
            title={entity.statusText}
            value={entity.received}
        />
        {
            entity.relatedItems.message
                ?
                <LabelValue
                    full
                    label="NotificationsMessage"
                    value={entity.relatedItems.message}
                />
                :
                <LabelValue
                    expandable
                    full
                    label="InfraResponse"
                    value={getJsonHtml(JSON.parse(entity.response))}
                />
        }
    </MultiCol>
</>

export default Card
