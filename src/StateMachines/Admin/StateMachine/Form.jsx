import {
    Check,
    DialogForm,
    Title,
} from "Form"
import { GranularityField } from "Granularities"

const inputs = <>
    <GranularityField />
    <Title />
    <Check
        label="InfraIsDefault"
        property="IsDefault"
    />
</>

const StateMachineForm = () => {
    return <DialogForm
        entityType="StateMachine"
        humanReadableEntityType="StateMachinesStateMachine"
        inputs={inputs}
    />
}

export default StateMachineForm
