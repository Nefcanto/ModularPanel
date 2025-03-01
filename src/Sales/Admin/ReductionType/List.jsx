import { List } from "List"
import ReductionType from "./Forms"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraKey</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.key}</td>
</>

const ReductionTypes = ({
    isSuperAdmin
}) => {

    return <List
        create={ReductionType}
        entityType="ReductionType"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        title="SalesReductionTypes"
    />

}

export default ReductionTypes
