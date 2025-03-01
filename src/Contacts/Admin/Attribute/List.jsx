import { List } from "List"
import AttributeForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraKey</th>
</>

const row = entity => <>
    <td>
        {entity?.title}
    </td>
    <td>
        {entity?.key}
    </td>
</>

const Attributes = ({
    parentEntity,
    progress,
    ...rest
}) => {
    return !progress && <List
        title="Person Attributes"
        entityType="PersonAttribute"
        headers={headers}
        create={AttributeForm}
        row={row}
        hasDelete
        {...rest}
    />
}

export default Attributes
