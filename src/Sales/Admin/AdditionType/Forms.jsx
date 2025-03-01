import {
    DialogForm,
    Title,
    Key,
} from "Form"

const inputs = <>
    <Title />
    <Key />
</>

const AdditionType = () => {

    return <DialogForm
        entityType="AdditionType"
        humanReadableEntityType="SalesAdditionType"
        inputs={inputs}
    />
}

export default AdditionType
