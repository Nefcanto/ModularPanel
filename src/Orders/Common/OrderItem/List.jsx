import { List } from "List"
import { ManageEntityStages } from "Flows"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import { AssignAttributes } from "Attributes"
import OrderItemForm from "./Form"
import headers from "./Headers"
import row from "./Row"
import card from "./Card"

const entityActions = entity => <>
    <ManageCategories />
    <ManageTags />
    <ManageEntityStages />
    <AssignAttributes />
</>

const OrderItems = () => {
    return <List
        card={card}
        create={OrderItemForm}
        entityActions={entityActions}
        entityType="OrderItem"
        hasDelete
        headers={headers}
        row={row}
        title="OrdersOrderItems"
    />
}

export default OrderItems
