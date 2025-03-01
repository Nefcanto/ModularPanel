import { List } from "List"
import {
    AssignedSettingsProperty,
    AssignSettings,
} from "Settings"
import StagesForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th>SettingsSettings</th>
</>

const row = entity => <>
    <td>
        {entity.title}
        {
            entity.percentShareInFlow &&
            <sup>{entity.percentShareInFlow}%</sup>
        }
    </td>
    <AssignedSettingsProperty />
</>

const entityActions = entity => <>
    <AssignSettings />
</>

const card = entity => <>
    <div>
        {entity.title}
        {
            entity.percentShareInFlow &&
            <sup>{entity.percentShareInFlow}%</sup>
        }
    </div>
    <AssignedSettingsProperty />
</>

const Stages = ({ isSuperAdmin }) => {
    return <List
        card={card}
        create={StagesForm}
        entityActions={entityActions}
        entityType="Stage"
        hasDelete={isSuperAdmin}
        hasEdit
        headers={headers}
        graph
        row={row}
        title="FlowsStages"
    />

}

export default Stages
