import { List } from "List"
import OptionForm from "./Form"

const headers = <>
    <th>InfraValue</th>
</>

const row = entity => <>
    <td>{entity.value}</td>
</>

const Options = () => {
    return <List
        entityType="AttributeOption"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="InfraOptions"
        upsert={OptionForm}
    />
}

export default Options
