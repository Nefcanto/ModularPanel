import { Text } from "List"

const headers = <>
    <td>Name</td>
    <td>BloggingPersonSlug</td>
</>

const filters = <>
    <Text
        property="NaturalPersonName"
        placeholder="Name"
    />
</>

const row = entity => <>
    <td>{entity?.naturalPersonName}</td>
    <td>{entity?.contactsPersonSlug}</td>
</>

export { headers }
export { filters }
export { row }
