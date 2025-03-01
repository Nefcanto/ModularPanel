import {
    Check,
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Check
        placeholder="InfraIsPublic"
        property="IsPublic"
    />
</>

const StateForm = () => {
    return <DialogForm
        entityType="StateMachineState"
        hasEdit
        humanReadableEntityType="StateMachinesState"
        inputs={inputs}
    />
}

export default StateForm
