import { List } from "List"
import ChoiceForm from "./Form"

const headers = <>
    <th>FormsValue</th>
</>

const row = entity => <>
    <td>{entity.choice}</td>
</>

const Choices = ({
    grandparentEntity,
    isSuperAdmin,
    parentEntity,
    progress,
    query,
}) => {

    return !progress && <>
        <List
            create={isSuperAdmin && ChoiceForm}
            entityType="FieldChoice"
            hasDelete={isSuperAdmin}
            hasEdit={isSuperAdmin}
            headers={headers}
            row={row}
            showId
            title="FormsChoices"
        />
    </>
}

export default Choices
