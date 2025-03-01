import Diversity3Icon from "@mui/icons-material/Diversity3"
import { EntityAction } from "List"
import AssignToRangeManagerDialog from "./AssignToRangeManagerDialog"

const AssignToRangeManager = ({
    entity,
    ...rest
}) => {

    return <>
        <EntityAction
            title="PropertiesAssignToRangeManager"
            dialog={AssignToRangeManagerDialog}
            icon={Diversity3Icon}
            entity={entity}
            {...rest}
        />
    </>
}

export default AssignToRangeManager
