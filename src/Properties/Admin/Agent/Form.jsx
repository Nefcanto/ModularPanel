import { DialogForm } from "Form"
import { UserInputs } from "Accounts"

const inputs = entity => <>
    {UserInputs()}
</>

const AgentForm = props => {
    return <DialogForm
        {...props}
        entityType="Agent"
        inputs={inputs}
    />
}

export default AgentForm
