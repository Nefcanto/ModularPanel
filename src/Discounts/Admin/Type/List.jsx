import TypeForm from "./Form"
import { List } from "List"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.slug}</td>
</>

const Types = () => {
    return <List
        create={TypeForm}
        entityType="DiscountType"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="InfraTypes"
    />
}

export default Types
