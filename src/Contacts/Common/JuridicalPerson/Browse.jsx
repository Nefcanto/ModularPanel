import { Text } from "List"

const filters = <>
    <Text
        property="FullName"
        placeholder="ContactsFullName"
    />
</>

const headers = <>
    <th>InfraName</th>
</>

const row = entity => <>
    <td>{entity.name}</td>
</>

export { filters }
export { headers }
export { row }
