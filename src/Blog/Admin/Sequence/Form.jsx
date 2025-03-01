import {
    DialogForm,
    Title
} from "Form"

const inputs = <>
    <Title />
</>

const SequenceForm = () => {
    return <DialogForm
        title="BlogSequence"
        entityType="Sequence"
        inputs={inputs}
    />
}

export default SequenceForm
