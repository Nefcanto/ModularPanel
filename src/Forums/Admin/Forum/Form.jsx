import {
    DialogForm,
    IsVital,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
    <IsVital />
</>

const ForumFrom = () => {

    return <DialogForm
        entityType="Forum"
        humanReadableEntityType="ForumsForum"
        inputs={inputs}
    />

}

export default ForumFrom
