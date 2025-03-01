import { useContext } from "react"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"
import { url } from "App"

const ManageState = () => {

    const { entity } = useContext(EntityContext || {})

    return <EntityAction
        goTo={url({
            path: "/stateMachines/stateMachineStates",
            query: {
                stateMachine: entity.key
            },
            parent: entity,
        })}
        icon={DynamicFeedIcon}
        title="StateMachinesSetStates"
    />
}

export default ManageState
