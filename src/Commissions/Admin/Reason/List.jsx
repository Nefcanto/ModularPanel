import {
    Key,
    List,
    Title,
} from "List"
import ReasonForm from "./Form"

const filters = <>
    <Title />
    <Key />
</>

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const Reasons = () => {

    return <List
        title="CommissionsReasons"
        entityType="Reason"
        filters={filters}
        headers={headers}
        row={row}
        create={ReasonForm}
        hasEdit
        hasDelete
    />
}

export default Reasons
