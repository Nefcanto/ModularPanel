import SearchIcon from "@mui/icons-material/Search"
import {
    List,
    ListAction,
} from "List"
import {
    PartHeaders,
    PartRow,
    PartSorts,
} from "PartsCommon"
import { AssignSettings } from "Settings"

const listActions = <>
    <ListAction
        icon={SearchIcon}
        post="/parts/part/findAll"
        reloadList
        superAdmin
        text="InfraFindAll"
        title="InfraFindAll"
    />
</>

const entityActions = <>
    <AssignSettings />
</>

const Types = () => {

    return <List
        entityActions={entityActions}
        headers={PartHeaders}
        listActions={listActions}
        row={PartRow}
        sorts={PartSorts}
        title="PartsParts"
    />
}

export default Types
