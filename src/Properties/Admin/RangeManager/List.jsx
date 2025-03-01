import {
    Image,
    List,
    Text,
} from "List"
import EntityActions from "./EntityActions"
import ListActions from "./ListActions"
import RangeManagerForm from "./Form"

const headers = <>
    <th></th>
    <th>InfraName</th>
</>

const row = entity => <>
    <Image />
    <td>
        {entity.displayName}
    </td>
</>

const RangeManagers = () => {
    return <List
        create={RangeManagerForm}
        entityActions={EntityActions}
        entityType="RangeManager"
        hasDelete
        headers={headers}
        listActions={ListActions}
        row={row}
        title="PropertiesRangeManagers"
    />
}

export default RangeManagers
