import { DialogForm } from "Form"
import AttributeInputs from "./Inputs"

const AttributeForm = ({ entityType }) => {
    return <DialogForm
        entityType="Attribute"
        humanReadableEntityType="AttributesAttribute"
        inputs={AttributeInputs}
    />
}

export default AttributeForm
