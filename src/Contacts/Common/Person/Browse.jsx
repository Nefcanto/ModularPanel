import { Text } from "List"

const filters = <>
    <Text
        property="DisplayName"
        placeholder="Name"
    />
</>

const headers = <>
    <th>InfraName</th>
</>

const row = entity => <>
    <td>{entity?.juridicalPersonName || entity.naturalPersonName}</td>
</>

export { filters }
export { headers }
export { row }
