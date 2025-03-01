import { List } from "List"
import TypeForm from "./Form"

const headers = <>
    <th>InfraSlug</th>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.slug}</td>
    <td>{entity.title}</td>
</>

const Types = () => {
    return <List
        title="RestaurantsTypes"
        entityType="RestaurantsType"
        headers={headers}
        row={row}
        create={TypeForm}
        hasEdit
        hasDelete
    />
}

export default Types
