import {
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
</>

const EntitySnippetForm = () => {
    return <DialogForm
        title="Snippet"
        entityType="EntitySnippet"
        inputs={inputs}
    />
}

export default EntitySnippetForm
