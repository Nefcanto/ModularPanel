import {
    DialogForm,
    LongText,
    Text,
    Title,
} from "Form"

const inputs = <>
    <Text
        property="Supertitle"
    />
    <Title />
    <Text
        property="Subtitle"
        required
    />
    <LongText
        property="Summary"
    />
</>

const ServiceForm = ({
    entityType
}) => {
    return <DialogForm
        entityType={entityType ?? "Service"}
        inputs={inputs}
    />
}

export default ServiceForm
