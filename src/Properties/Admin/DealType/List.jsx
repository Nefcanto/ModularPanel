import DealTypeForm from "./Form"
import { List } from "List"

const headers = <>
    <th>InfraName</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <td>{entity?.name}</td>
    <td>{entity?.slug}</td>
</>

const DealTypes = ({ isSuperAdmin }) => {
    return <List
        create={DealTypeForm}
        entityType="AdminDealType"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        title="PropertiesDealTypes"
    />
}

export default DealTypes
