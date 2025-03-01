import {
    DialogForm,
    Title,
} from "Form"
import { PersonField } from "Contacts"

const inputs = <>
    <PersonField
        byGuid
        placeholder="CommonCustomer"
        property="Person"
    />
</>

const OrderForm = <DialogForm
    entityType="Order"
    humanReadableEntityType="OrdersOrder"
    inputs={inputs}
/>

export default OrderForm
