import {
    Code,
    PageForm,
} from "Form"

const inputs = <>
    <Code
        property="TextualContent"
        placeholder="InfraCode"
    />
</>

const EditContentForm = () => {

    return <PageForm
        title="InfraEditContent"
        entityType="Blob"
        inputs={inputs}
        large
    />
}

export default EditContentForm
