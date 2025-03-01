import { DialogForm } from "Form"
import { AgentField } from "Properties"

const inputs = entity => <>
    <AgentField />
</>

const AgentFileForm = () => {
    return <DialogForm
        entityType="AgentFile"
        humanReadableEntityType="PropertiesAgentFile"
        inputs={inputs}
    />
}

export default AgentFileForm
