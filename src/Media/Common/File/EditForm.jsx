import {
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
</>

const EditForm = <DialogForm
    entityLoadingUrl={entity => `/file/getFile?id=${entity.id}`}
    entityType="File"
    humanReadableEntityType="MediaFile"
    inputs={inputs}
/>

export default EditForm
