import HubIcon from "@mui/icons-material/Hub"
import CategoryIcon from "@mui/icons-material/Category"
import CodeIcon from "@mui/icons-material/Code"
import { parseQuery } from "App"
import {
    EntityAction,
    Graph,
    List,
} from "List"
import {
    AssignedSettingsProperty,
    AssignSettings,
} from "Settings"
import GranularityProperty from "GranularityProperty"
import { ChangeScope } from "Granularities"
import FlowsForm from "./Form"
import ManageStages from "../Stage/Manage"
import ParametersDialog from "./ParametersDialog"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraScope</th>
    <th>SettingsSettings</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <GranularityProperty />
    <AssignedSettingsProperty />
</>

const entityActions = entity => <>
    <ChangeScope />
    <ManageStages />
    <AssignSettings />
    <EntityAction
        dialog={ParametersDialog}
        icon={CategoryIcon}
        title="FlowsShowParameters"
    />
    <EntityAction
        goTo={`/flows/flow/code?flow=${entity.key}`}
        icon={CodeIcon}
        title="InfraCode"
    />
    {/* <Graph /> */}
</>

const Flows = () => {

    const { fixedGranularity } = parseQuery()

    return <List
        create={FlowsForm}
        entityActions={entityActions}
        entityType="Flow"
        hasDelete
        hasEdit
        headers={headers}
        module="Flows"
        row={row}
        title="FlowsDefinedFlows"
    />

}

export default Flows
