import {
    Code,
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Code
        placeholder="AggregatesSnippet"
        property="Snippet"
        required
    />
</>

const CodeForm = <DialogForm
    entityType="Code"
    humanReadableEntityType="InfraCode"
    inputs={inputs}
/>

export default CodeForm
