import {
    DialogForm,
    Key,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Title />
</>

const TypeForm = () => {
    return <DialogForm
        humanReadableEntityType="InfraType"
        entityType="DiscountType"
        inputs={inputs}
    />
}

export default TypeForm
