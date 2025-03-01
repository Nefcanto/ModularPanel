import {
    Image,
    List,
} from "List"
import { EditPerson } from "Contacts"
import AuthorForm from "./Form"

const headers = <>
    <th></th>
    <th>BlogAuthor</th>
</>

const row = entity => <>
    <Image />
    <td>
        {entity.displayName}
    </td>
</>

const entityActions = <>
    <EditPerson />
</>

const Authors = () => {
    return <List
        create={AuthorForm}
        entityActions={entityActions}
        entityType="Author"
        hasDelete
        headers={headers}
        row={row}
        title="BlogAuthors"
    />
}

export default Authors
