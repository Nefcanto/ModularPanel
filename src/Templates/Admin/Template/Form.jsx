import {
    Code,
    DialogForm,
    IsVital,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <IsVital />
    <Code
        property="Code"
        required
    />
</>

const TemplateForm = <DialogForm
    entityType="Template"
    humanReadableEntityType="TemplatesTemplate"
    inputs={inputs}
/>

export default TemplateForm
