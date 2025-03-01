import { List } from "List"
import AdditionType from "./Forms"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraKey</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.key}</td>
</>

const AdditionTypes = ({
    isSuperAdmin
}) => {

    return <List
        create={AdditionType}
        entityType="AdditionType"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        title="SalesAdditionTypes"
    />

}

export default AdditionTypes
