import { List } from "List"
import DoerForm from "./Form"

const headers = <>
    <th>InfraName</th>
</>

const row = entity => <>
    <td>{entity.naturalPersonName}</td>
</>

const Doers = () => {
    return <List
        title="TasksDoers"
        entityType="Doer"
        headers={headers}
        row={row}
        create={DoerForm}
        hasDelete
    />
}

export default Doers
