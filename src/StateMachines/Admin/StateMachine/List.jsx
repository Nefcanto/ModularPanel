import {
    BooleanProperty,
    List,
} from "List"
import { GranularityProperty } from "Granularities"
import StateMachineForm from "./Form"
import ManageState from "../State/Manage"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraScope</th>
    <th>InfraIsDefault</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <GranularityProperty />
    <BooleanProperty
        actionUrl={`/stateMachine/toggleBoolean?id=${entity.id}&property=isDefault`}
        reloadListOnSuccess
        value={entity?.isDefault}
    />
</>

const entityActions = entity => <>
    <ManageState />
</>

const StateMachines = () => {
    return <List
        create={StateMachineForm}
        entityActions={entityActions}
        entityType="StateMachine"
        hasDelete
        hasEdit
        headers={headers}
        module="StateMachines"
        row={row}
        title="StateMachinesDefinedStateMachines"
    />
}

export default StateMachines
