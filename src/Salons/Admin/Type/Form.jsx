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

const TypeForm = props => {

    return <DialogForm
        {...props}
        entityType="SalonType"
        humanReadableEntityType="SalonsSalonType"
        inputs={inputs}
    />
}

export default TypeForm
