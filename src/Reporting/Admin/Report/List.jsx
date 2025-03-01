import VisibilityIcon from "@mui/icons-material/Visibility"
import {
    EntityAction,
    List,
} from "List"
import { ChooseSource } from "Aggregates"
import { ChooseTemplate } from "Templates"
import ReportForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const entityActions = entity => <>
    {
        (entity.query || entity.code) && entity.template &&
        <EntityAction
            goTo={`/reporting/report/view?id=${entity.id}`}
            icon={VisibilityIcon}
            title="InfraView"
        />
    }
    <ChooseSource />
    <ChooseTemplate />
</>

const Reports = () => {
    return <List
        create={ReportForm}
        entityActions={entityActions}
        entityType="Report"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="ReportingReports"
    />
}

export default Reports
