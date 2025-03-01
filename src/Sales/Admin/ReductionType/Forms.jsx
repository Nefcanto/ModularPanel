import {
    DialogForm,
    Title,
    Key,
} from "Form"

const inputs = <>
    <Title />
    <Key />
</>

const ReductionType = () => {

    return <DialogForm
        entityType="ReductionType"
        humanReadableEntityType="SalesReductionType"
        inputs={inputs}
    />
}

export default ReductionType
