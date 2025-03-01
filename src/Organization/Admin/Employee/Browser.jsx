import { Text } from "List"

const headers = <>
    <td>InfraName</td>
</>

const filters = <>
    <Text
        property="DisplayName"
        placeholder="InfraName"
    />
</>

const row = entity => <>
    <td>{entity?.displayName}</td>
</>

export { headers }
export { filters }
export { row }
