import {
    DialogForm,
    Key,
    Title,
} from "Form"

const inputs = entity => <>
    <Title />
    <Key />
</>

const PaymentMethodForm = () => {

    return <DialogForm
        entityType="PaymentMethod"
        humanReadableEntityType="PaymentPaymentMethod"
        inputs={inputs}
    />
}

export default PaymentMethodForm
