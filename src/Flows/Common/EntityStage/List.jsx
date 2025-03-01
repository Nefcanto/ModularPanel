import CategoryIcon from "@mui/icons-material/Category"
import {
    DateTime,
    EntityAction,
    List,
} from "List"
import { SendTextMessage } from "Notifications"
import { ManageFiles } from "Media"
import { useEntitySettings } from "Settings"
import EntityStageForm from "./Form"
import EntityStageEditForm from "./EditForm"
import ParametersDialog from "./ParametersDialog"
import FlowFilter from "../Flow/Filter"

const filters = ({ isMultiFlow }) => <>
    {
        isMultiFlow && <FlowFilter />
    }
</>

const headers = ({ isMultiFlow }) => <>
    {isMultiFlow && <th>FlowsFlow</th>}
    <th>FlowsStage</th>
    <th>InfraDate</th>
    <th>InfraDescription</th>
</>

const row = ({
    entity,
    isMultiFlow
}) => <>
        {
            isMultiFlow && <td>{entity.flowsFlowTitle}</td>
        }
        <td>
            {entity.title}
            {
                entity.percentShareInFlow &&
                <sup>{entity.percentShareInFlow}%</sup>
            }
        </td>
        <DateTime
            date={entity.startUtcDate}
        />
        <td>
            {entity.description}
        </td>
    </>

const entityActions = entity => {

    const { getSetting } = useEntitySettings()
    const sendNotification = getSetting(entity, "sendNotification")

    return <>
        {sendNotification && <SendTextMessage />}
        {sendNotification &&
            <EntityAction
                dialog={ParametersDialog}
                icon={CategoryIcon}
                title="FlowsShowParameters"
            />
        }
        <ManageFiles />
    </>
}

const EntityStages = () => {

    return <List
        create={EntityStageForm}
        edit={EntityStageEditForm}
        entityActions={entityActions}
        entityType="EntityStage"
        filters={filters}
        hasDelete
        headers={headers}
        row={row}
        title="FlowsStages"
    />
}

export default EntityStages
