import {
    DialogForm,
    LongText,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <LongText
        property="Text"
        required
    />
</>

const AnnouncementForm = <DialogForm
    entityType="Announcement"
    inputs={inputs}
/>

export default AnnouncementForm
