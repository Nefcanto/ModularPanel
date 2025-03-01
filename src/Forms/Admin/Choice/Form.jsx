import {
    DialogForm,
    Key,
    Text,
} from "Form"

const inputs = <>
    <Key
        noRequired
    />
    <Text
        property="Choice"
        placeholder="FormsChoice"
    />

</>

const ChoiceForm = () => {
    return <DialogForm
        entityType="FieldChoice"
        humanReadableEntityType="FormsFieldChoice"
        inputs={inputs}
    />
}

export default ChoiceForm
