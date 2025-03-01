import {
    DialogForm,
    Video,
} from "Form"

const inputs = <>
    <Video
        property="Video"
    />
</>

const CreateForm = <DialogForm
    entityType="VlogVideo"
    humanReadableEntityType="VlogVideo"
    inputs={inputs}
    submitTo="/vlogVideo/setVideo"
/>

export default CreateForm
