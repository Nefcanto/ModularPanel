import {
    DialogForm,
    Link,
    LongText,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Slug />
    <Title />
    <LongText
        placeholder="InfraSummary"
        property="Summary"
    />
    <Link
        placeholder="DataTypesLink"
        property="Link"
    />
</>

const VirtualTourPageForm = () => {
    return <DialogForm
        entityType="VirtualTourPage"
        inputs={inputs}
        title="MediaVirtualTourPage"
    />
}

export default VirtualTourPageForm
