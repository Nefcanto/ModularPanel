import {
    DialogForm,
    Title,
    Key,
    Slug,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Title />
</>

const TypeForm = <DialogForm
    entityType="RestaurantsType"
    inputs={inputs}
/>

export default TypeForm
