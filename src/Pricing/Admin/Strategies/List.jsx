import { List } from "List"
import StrategyForm from "./Form"

const headers = <>
    <td>InfraTitle</td>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const Strategies = () => {
    return <List
        create={StrategyForm}
        entityType="Strategy"
        headers={headers}
        row={row}
        title="PricingStrategies"
    />
}

export default Strategies
