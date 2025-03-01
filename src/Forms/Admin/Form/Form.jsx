import {
    DialogForm,
    IsVital,
    Key,
    Link,
    LongText,
    Slug,
    Text,
    Title,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Title />
    <LongText
        property="Description"
        placeholder="InfraDescription"
    />
    <Text
        property="SuccessMessage"
        placeholder="FormsSuccessMessage"
    />
    <Text
        property="ErrorMessage"
        placeholder="FormsErrorMessage"
    />
    <Text
        property="CtaText"
        placeholder="FormsCtaText"
    />
    <Link
        property="CtaLink"
        placeholder="FormsCtaLink"
    />
    <IsVital />
</>

const Form = () => {
    return <DialogForm
        title="FormsForm"
        entityType="Form"
        inputs={inputs}
    />
}

export default Form
