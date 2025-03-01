import { Title } from "List"

const filters = <>
    <Title />
</>

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title} </td>
</>

export { filters }
export { headers }
export { row }
