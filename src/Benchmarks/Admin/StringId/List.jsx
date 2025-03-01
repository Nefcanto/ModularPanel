import { List } from "List"

const headers = <>
    <th>BenchmarkStringId</th>
</>

const row = entity => <>
    <td>{entity.stringIdentifier}</td>
</>

const StringIds = () => {
    return <List
        title="BenchmarksStringIds"
        entityType="StringId"
        headers={headers}
        row={row}
    />
}

export default StringIds
