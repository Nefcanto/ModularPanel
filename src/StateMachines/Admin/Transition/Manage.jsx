import MoveDownIcon from "@mui/icons-material/MoveDown"
import {
    parseQuery,
    url,
} from "App"
import { ListAction } from "List"

const ManageTransitions = () => {
    const { stateMachine } = parseQuery()
    return <ListAction
        icon={MoveDownIcon}
        title="StateMachinesManageTransitions"
        url={url({
            path: "/stateMachines/transitions",
            query: {
                stateMachine: stateMachine
            }
        })}
    />
}

export default ManageTransitions
