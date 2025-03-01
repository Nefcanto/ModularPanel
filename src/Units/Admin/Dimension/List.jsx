import { List } from "List"
import DimensionForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const Dimensions = () => {
    return <List
        create={DimensionForm}
        entityType="Dimension"
        hasDelete
        hasEdit
        headers={headers}
        module="Units"
        row={row}
        title="UnitsDimensions"
    />
}

export default Dimensions
