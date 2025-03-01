import {
    DialogForm,
    Text,
} from "Form"

const inputs = <>
    <Text
        placeholder="InfraKey"
        property="Key"
    />
    <Text
        placeholder="InfraValue"
        property="Value"
    />
</>

const AttributeForm = () => {
    return <DialogForm
        entityType="AttributeOption"
        humanReadableEntityType="InfraOption"
        inputs={inputs}
    />
}

export default AttributeForm
