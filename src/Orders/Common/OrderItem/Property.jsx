import CheckIcon from "@mui/icons-material/Check"
import { useContext } from "react"
import {
    pascalize,
    t,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    LabelValue,
    Progress,
} from "Panel"
import { DateTime } from "List"
import EntityRenderers from "EntityRenderers"

const OrderItemsProperty = props => {

    const { entity } = useContext(EntityContext)
    const { isTable } = useContext(ListContext)
    const { orderItems } = entity.relatedItems

    return <LabelValue
        {...props}
        label="OrdersOrderItems"
        value={
            orderItems?.map(orderItem => {
                return <EntityRenderers
                    key={orderItem.id}
                    entity={orderItem.relatedItems.entity}
                    entityType={pascalize(orderItem.relatedItems.entity?.relatedItems?.entityType)}
                    module={pascalize(orderItem.relatedItems.entity?.relatedItems?.module)}
                />
            })
        }
        vertical
    />
}

export default OrderItemsProperty
