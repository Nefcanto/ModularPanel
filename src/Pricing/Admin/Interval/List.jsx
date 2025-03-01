import { List } from "List"
import IntervalForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th>PricingDaysInInterval</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.daysInInterval}</td>
</>

const Intervals = () => {
    return <List
        title="PricingIntervals"
        entityType="Interval"
        headers={headers}
        row={row}
        create={IntervalForm}
        hasEdit
        hasDelete
    />
}

export default Intervals
