import {
    DialogForm,
    Text,
    Key,
    Title,
} from "Form"

const inputs = <>
    <Key />
    <Title />
    <Text
        property="Value"
        placeholder="Value"
    />

</>

const AttributeForm = (props) => {
    return <DialogForm
        entityType="PersonAttribute"
        inputs={inputs}
        {...props}
    />
}

export default AttributeForm
