import { List } from "List"
import LevelForm from "./Form"

const headers = <>
    <th>InfraSlug</th>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.slug}</td>
    <td>{entity.title}</td>
</>

const Levels = () => {
    return <List
        title="PricingPriceLevels"
        entityType="PricingLevel"
        headers={headers}
        row={row}
        create={LevelForm}
        hasEdit
        hasDelete
    />
}

export default Levels
