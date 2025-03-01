import {
    DateTime,
    LabelValue,
    MultiCol,
} from "Panel"
import { PersonProperty } from "Contacts"
import { EntityAttributesProperty } from "Attributes"
import { EntityStagesProperty } from "Flows"
import { OrderItemsProperty } from "OrdersCommon"

const card = entity => <MultiCol>
    <PersonProperty />
    <LabelValue
        label="InfraDate"
        value={
            <DateTime
                date={entity.utcDate}
                row
            />
        }
    />
    <LabelValue
        label="InfraTrackingNumber"
        value={entity.number}
    />
    <EntityAttributesProperty />
    <EntityStagesProperty full />
    <OrderItemsProperty full />
</MultiCol>

export default card
