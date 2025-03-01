import { List } from "List"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const Snippets = () => {
    return <List
        title="Snippets"
        entityType="Snippet"
        headers={headers}
        row={row}
    />
}

export default Snippets
