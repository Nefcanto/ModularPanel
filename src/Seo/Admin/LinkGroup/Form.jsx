import {
    DialogForm,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
</>

const LinkGroupForm = <DialogForm
    entityType="LinkGroup"
    humanReadableEntityType="SeoLinkGroup"
    inputs={inputs}
/>

export default LinkGroupForm
