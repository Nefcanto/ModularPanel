import { Text } from "List"

const filters = <>
    <Text
        property="FullName"
        placeholder="ContactsFullName"
    />
</>

const headers = <>
    <th>ContactsFullName</th>
</>

const row = entity => <>
    <td>{entity.naturalPersonName}</td>
</>

export { filters }
export { headers }
export { row }
