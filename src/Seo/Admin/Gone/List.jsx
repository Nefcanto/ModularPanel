import {
    List,
    Text,
} from "List"
import GoneForm from "./Form"

const filters = <>
    <Text
        property="Url"
        placeholder="InfraUrl"
    />
</>

const headers = <>
    <th>InfraUrl</th>
</>

const row = entity => <>
    <td dir="ltr">{entity.url}</td>
</>

const Gones = () => {
    return <List
        title="SeoGones"
        entityType="Gone"
        filters={filters}
        headers={headers}
        row={row}
        create={GoneForm}
        hasDelete
        hasEdit
    />
}

export default Gones
