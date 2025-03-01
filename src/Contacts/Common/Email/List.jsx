import { List } from "List"
import EmailForm from "./Form"

const headers = <>
    <th>InfraValue</th>
</>

const row = entity => <>
    <td>
        {entity.value}
    </td>
</>

const Emails = props => {
    return <List
        title="ContactsEmails"
        entityType="Email"
        headers={headers}
        create={EmailForm}
        row={row}
        hasEdit
        hasDelete
        {...props}
    />
}

export default Emails
