import {
    Image,
    List,
} from "List"
import { AddUserAction } from "Accounts"
import { EditPerson } from "Contacts"
import { EntityQrCode } from "Media"
import AssignToRangeManager from "./AssignToRangeManager"
import AgentForm from "./Form"
import MoveAgentPropertiesAction from "./MoveAgentPropertiesAction"
import { ManageAggregateChart } from "PropertiesCommon"
import CalculationAggregateAction from "./CalculationAggregateAction"

const listActions = <>
    <AddUserAction
        entityType="Agent"
        title="PropertiesAgent"
    />
    <MoveAgentPropertiesAction />
    <CalculationAggregateAction />
</>

const headers = <>
    <th></th>
    <th>InfraName</th>
</>

const row = entity => <>
    <Image
        deletionUrl={`/agent/deleteImage?id=${entity.contactsPersonId}`}
        uploadUrl={`/agent/setImage?id=${entity.contactsPersonId}`}
        url={entity.relatedItems?.imageUrl}
    />
    <td>
        {entity.displayName}
    </td>
</>

const entityActions = entity => <>
    <EditPerson
        entity={entity}
        phones
        social
    />
    <AssignToRangeManager />
    <ManageAggregateChart />
    <EntityQrCode path={`/properties?agent=${entity.slug}`} />
</>

const Agents = () => {
    return <List
        create={AgentForm}
        entityActions={entityActions}
        entityType="Agent"
        hasDelete
        headers={headers}
        listActions={listActions}
        row={row}
        title="PropertiesAgents"
    />
}

export default Agents
