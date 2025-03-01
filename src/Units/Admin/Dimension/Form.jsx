import {
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
</>

const DimensionForm = <DialogForm
    entityType="Dimension"
    humanReadableEntityType="UnitsDimension"
    inputs={inputs}
/>

export default DimensionForm
