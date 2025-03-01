import PropertyTypeForm from "./Form"
import { List } from "List"

const headers = <>
    <th>InfraName</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <td>{entity?.name}</td>
    <td>{entity?.slug}</td>
</>

const PropertyTypes = ({ isSuperAdmin }) => {
    return <List
        create={PropertyTypeForm}
        entityType="AdminPropertyType"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        title="PropertiesPropertyTypes"
    />
}

export default PropertyTypes
