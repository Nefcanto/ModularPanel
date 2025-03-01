import {
    DialogForm,
    Numeric,
} from "Form"
import { EntityField } from "Modules"
import { UnitField } from "Units"

const inputs = <>
    <EntityField />
</>

const OrderItemForm = <DialogForm
    entityType="OrderItem"
    humanReadableEntityType="OrdersOrderItem"
    inputs={inputs}
/>

export default OrderItemForm
