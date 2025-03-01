import { Browse } from "Form"
import { Text } from "List"

const filters = <>
    <Text
        property="Text"
        placeholder="InfraTitle"
    />
</>

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.text}</td>
</>

const JobTitleField = () => {
    return <Browse
        property="JobTitleId"
        entityType="JobTitle"
        filters={filters}
        headers={headers}
        row={row}
        placeholder="ContactsJobTitle"
        show={entity => entity.text}
        choose={entity => entity.id}
        required
    />
}

export default JobTitleField
