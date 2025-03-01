import { List } from "List"
import GlobalEntityTypeForm from "./Form"

const headers = <>
    <th>ModulesEntityType</th>
</>

const row = entity => <>
    <td>{entity?.entityTypeKey}</td>
</>

const GlobalEntityTypes = () => {

    return <List
        create={GlobalEntityTypeForm}
        entityType="GlobalEntityType"
        hasDelete
        headers={headers}
        row={row}
        title="TenantsGlobalEntityTypes"
    />
}

export default GlobalEntityTypes
