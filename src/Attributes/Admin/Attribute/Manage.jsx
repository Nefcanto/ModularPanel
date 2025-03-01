import RuleIcon from "@mui/icons-material/Rule"
import { ListAction } from "List"
import AttributeDialog from "./Dialog"

const AttributeListAction = () => {
    return <ListAction
        title="Add"
        icon={RuleIcon}
        dialog={AttributeDialog}
    />
}

export default AttributeListAction
