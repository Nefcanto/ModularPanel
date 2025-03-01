import {
    Code,
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Code
        placeholder="AggregatesSnippet"
        property="Code"
        required
    />
</>

const QueryForm = <DialogForm
    entityType="Query"
    humanReadableEntityType="InfraQuery"
    inputs={inputs}
/>

export default QueryForm
