import {
    DialogForm,
    File,
} from "Form"

const inputs = <>
    <File
        property="File"
    />
</>

const CreateForm = <DialogForm
    entityType="File"
    humanReadableEntityType="MediaFile"
    inputs={inputs}
/>

export default CreateForm
