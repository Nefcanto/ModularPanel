import {
    DialogForm,
    LongText,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
    <LongText
        property="Description"
        placeholder="InfraDescription"
    />
</>

const EditForm = () => {
    return <DialogForm
        entityType="VlogVideo"
        humanReadableEntityType="VlogVideo"
        inputs={inputs}
    />
}

export default EditForm
