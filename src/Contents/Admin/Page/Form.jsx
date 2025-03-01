import {
    DialogForm,
    IsVital,
    Key,
    LongText,
    Slug,
    Title,
} from "Form"

const inputs = entity => <>
    <Key />
    <Title />
    <Slug
        showIf={state => state !== "IsVital"}
        if="state !=== IsVital"
    />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
    <IsVital />
</>

const PageForm = () => {
    return <DialogForm
        entityType="Page"
        humanReadableEntityType="ContentsPage"
        inputs={inputs}
    />
}

export default PageForm
