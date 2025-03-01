import { List } from "List"
import EntitySnippetForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>
        {entity.title}
    </td>
</>

const EntitySnippets = () => {
    return <List
        create={EntitySnippetForm}
        entityType="EntitySnippet"
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="ContentsContentSnippets"
    />
}

export default EntitySnippets
