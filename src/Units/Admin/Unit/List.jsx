import CheckIcon from "@mui/icons-material/Check"
import OneKIcon from "@mui/icons-material/OneK"
import {
    List,
    ListAction,
} from "List"
import UnitForm from "./Form"
import { filters } from "UnitsCommon"
import { sorts } from "UnitsCommon"
import { headers } from "UnitsCommon"

const listActions = <>
    <ListAction
        title="UnitsPrefixes"
        icon={OneKIcon}
        url="/units/prefixes"
    />
    {/* <ListAction
        title="UnitsAssign"
        icon={CheckIcon}
        url="/unitAssignments"
    /> */}
</>

const row = entity => {
    return <>
        <td>{entity.title}</td>
    </>
}

const Units = () => {
    return <List
        title="UnitsUnits"
        entityType="Unit"
        listActions={listActions}
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        create={UnitForm}
        hasDelete
        hasEdit
    />
}

export default Units
