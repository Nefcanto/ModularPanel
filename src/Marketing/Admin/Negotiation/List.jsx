import { List } from "List"
import NegotiationForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const Negotiations = () => {
    return <List
        title="MarketingNegotiations"
        entityType="Negotiation"
        headers={headers}
        row={row}
        create={NegotiationForm}
        hasEdit
        hasDelete
    />
}

export default Negotiations
