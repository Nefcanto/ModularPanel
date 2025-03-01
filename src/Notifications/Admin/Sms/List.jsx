import BugReportIcon from "@mui/icons-material/BugReport"
import {
    List,
    ListAction,
} from "List"

const listActions = () => {

    const testConnectivity = ({
        setProgress,
    }) => {
        alert("tested")
    }

    return <>
        <ListAction
            title="NotificationsTestConnectivity"
            icon={BugReportIcon}
            onClick={testConnectivity}
            notApplicableToEntities
        />
    </>
}

const headers = <>
    <th>NotificationsSmsText</th>
</>

const row = entity => <>
    <td>{entity.text}</td>
</>

const SmsList = () => {
    return <List
        title="NotificationsSmsList"
        entityType="Sms"
        listActions={listActions}
        headers={headers}
        row={row}
    />
}

export default SmsList
