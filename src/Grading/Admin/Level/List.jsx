import { List } from "List"
import LevelForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th>GradingSkill</th>
    <th>GradingFrom</th>
    <th>GradingTo</th>
    <th>UnitsUnit</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.skill}</td>
    <td>{entity.fromQuantity}</td>
    <td>{entity.toQuantity}</td>
    <td>{entity.unit}</td>
</>

const Levels = () => {
    return <List
        title="GradingLevels"
        entityType="Level"
        headers={headers}
        row={row}
        create={LevelForm}
        hasEdit
        hasDelete
    />
}

export default Levels
