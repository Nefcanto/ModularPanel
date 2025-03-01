import {
    DialogForm,
    Title,
    Key
} from "Form"

const inputs = <>
    <Key />
    <Title />
</>

const ReasonForm = () => {
    return <DialogForm
        entityType="Reason"
        humanReadableEntityType="CommissionsReason"
        inputs={inputs}
    />
}

export default ReasonForm
