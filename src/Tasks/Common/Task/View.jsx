import VisibilityIcon from "@mui/icons-material/Visibility"
import { EntityAction } from "List"

const View = ({ entity }) => {
    return <EntityAction
        title="View"
        icon={VisibilityIcon}
        goTo={`/task?taskId=${entity.id}`}
    />
}

export default View
