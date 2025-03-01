import { Text } from "List"

const headers = <>
    <th>ContactsFirstName</th>
    <th>ContactsLastName</th>
</>

const row = entity => <>
    <td>{entity.firstName}</td>
    <td>{entity.lastName}</td>
</>

export { headers }
export { row }
