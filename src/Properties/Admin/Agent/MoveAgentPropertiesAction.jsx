import { useState } from "react"
import MoveDownIcon from "@mui/icons-material/MoveDown"
import { DialogContext } from "Contexts"
import { ListAction } from "List"
import { DialogForm } from "Form"
import AgentField from "./Field"

const MoveAgentPropertiesAction = props => {

    const [open, setOpen] = useState(false)

    const inputs = <>
        <AgentField
            choose={i => i.person}
            placeholder="PropertiesSourceAgent"
            property="SourceAgent"
            required
        />
        <AgentField
            choose={i => i.person}
            placeholder="PropertiesTargetAgent"
            property="TargetAgent"
            required
        />
    </>

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <DialogForm
            title="PropertiesMoveAgentProperties"
            {...props}
            inputs={inputs}
            submitTo="/agent/moveProperties"
        />
        <ListAction
            title="PropertiesMoveAgentProperties"
            icon={MoveDownIcon}
            onClick={() => setOpen(true)}
        />
    </DialogContext.Provider>
}

export default MoveAgentPropertiesAction
