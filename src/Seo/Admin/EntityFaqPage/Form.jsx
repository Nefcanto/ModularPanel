import {
    DialogForm,
    LongText,
} from "Form"

const inputs = <>
    <LongText
        property="Question"
        required
        rows={2}
    />
    <LongText
        property="Answer"
        required
        rows={5}
    />
</>

const EntityFaqPageForm = <DialogForm
    title="FAQ"
    entityType="EntityFaqPage"
    inputs={inputs}
/>

export default EntityFaqPageForm
