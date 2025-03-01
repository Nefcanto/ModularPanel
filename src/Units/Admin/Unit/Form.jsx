import {
    DialogForm,
    Title,
} from "Form"

const UnitForm = () => {

    const inputs = <>
        <Title />
    </>

    return <DialogForm
        entityType="Unit"
        humanReadableEntityType="UnitsUnit"
        inputs={inputs}
    />
}

export default UnitForm
