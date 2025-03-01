import {
    List,
    Text,
    Title,
} from "List"
import LinkForm from "./Form"

const filters = <>
    <Title />
    <Text
        placeholder="InfraUrl"
        property="Url"
    />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>InfraUrl</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.url.cut(50)}</td>
</>

const Links = ({ parentEntity }) => {
    return <List
        entityType="Link"
        filters={filters}
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="SeoLinks"
        upsert={LinkForm}
    />
}

export default Links
