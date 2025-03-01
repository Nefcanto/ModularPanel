import {
    DialogForm,
    LongText,
    Slug,
    Text,
    Title,
} from "Form"

const inputs = <>
    <Text
        dir="ltr"
        placeholder="GlossaryEntry"
        property="Term"
        required
    />
    <Title />
    <Slug />
    <LongText
        placeholder="GlossaryDefinition"
        property="Definition"
    />
</>

const TermForm = props => {

    return <DialogForm
        {...props}
        entityType="Entry"
        humanReadableEntityType="Term"
        inputs={inputs}
    />
}

export default TermForm
