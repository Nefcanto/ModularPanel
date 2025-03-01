import { Text } from "List"

const filters = <>
    <Text
        property="FullName"
    />
</>

const headers = <>
    <th>InfraName</th>
</>

const row = entity => <>
    <td>{entity.displayName}</td>
</>

export { filters }
export { headers }
export { row }
