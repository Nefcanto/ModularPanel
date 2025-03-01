import SearchIcon from "@mui/icons-material/Search"
import {
    List,
    ListAction,
} from "List"
import {
    ModuleHeaders,
    ModuleRow,
    ModuleSorts,
} from "ModulesCommon"
import { AssignSettings } from "Settings"

const listActions = url => <>
    <ListAction
        icon={SearchIcon}
        post={url}
        reloadList
        superAdmin
        text="InfraFindAll"
        title="InfraFindAll"
    />
</>

const entityActions = <>
    <AssignSettings />
</>

const EntityTypes = () => {

    const url = window.settings?.NodeApi ? "/parts/part/findAll" : "/module/findAll"

    return <List
        entityActions={entityActions}
        entityType="module"
        headers={ModuleHeaders}
        listActions={listActions(url)}
        row={ModuleRow}
        sorts={ModuleSorts}
        title="ModulesModules"
    />
}

export default EntityTypes
