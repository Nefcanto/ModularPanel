import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import {
    BooleanProperty,
    EntityAction,
    List,
} from "List"
import { AssignSettings } from "Settings"
import DashboardForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraIsDefault</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    {
        entity.isDefault
            ?
            <BooleanProperty
                value={entity.isDefault}
            />
            :
            <BooleanProperty
                actionUrl={`/dashboard/setAsDefault/${entity.id}`}
                reloadListOnSuccess
                value={entity.isDefault}
            />
    }
</>

const entityActions = entity => <>
    <EntityAction
        goTo={`/dashboards/design?dashboard=${entity.key || entity.id}`}
        icon={DashboardCustomizeIcon}
        title="DashboardsDesign"
    />
    <AssignSettings />
</>

const Dashboards = () => {
    return <List
        create={DashboardForm}
        entityActions={entityActions}
        entityType="Dashboard"
        hasDelete
        hasEdit
        headers={headers}
        module="Dashboards"
        row={row}
        title="DashboardsDashboards"
    />
}

export default Dashboards
