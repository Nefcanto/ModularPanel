import {
    DialogForm,
    Key,
    Title,
} from "Form"

const inputs = entity => <>
    <Key />
    <Title />
</>

const ShipmentMethodForm = props => {
    return <DialogForm
        {...props}
        entityType="ShipmentMethod"
        title="ShipmentCreateShipmentMethod"
        inputs={inputs}
    />
}

export default ShipmentMethodForm
