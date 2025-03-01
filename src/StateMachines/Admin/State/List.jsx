import ColorLensIcon from "@mui/icons-material/ColorLens"
import {
    BooleanProperty,
    EntityAction,
    List,
} from "List"
import {
    AssignedSettingsProperty,
    AssignSettings,
} from "Settings"
import StateForm from "./Form"
import ManageTransitions from "../Transition/Manage"
import ColorForm from "./ColorForm"

const listActions = <>
    <ManageTransitions />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>InfraIsPublic</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <AssignedSettingsProperty />
    <BooleanProperty
        actionUrl={`/stateMachineState/toggleBoolean?id=${entity.id}&property=IsPublic`}
        value={entity.isPublic}
    />
</>

const entityActions = entity => <>
    <EntityAction
        dialog={ColorForm}
        icon={ColorLensIcon}
        title="Color"
    />
    <AssignSettings />
</>

const States = ({ isSuperAdmin }) => {
    return <List
        create={StateForm}
        entityActions={entityActions}
        entityType="StateMachineState"
        hasDelete={isSuperAdmin}
        hasEdit
        headers={headers}
        listActions={listActions}
        row={row}
        title="StateMachinesStates"
    />

}

export default States
