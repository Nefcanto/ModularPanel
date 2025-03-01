import {
    List,
    Text
} from "List"

const filters = <>
    <Text
        property="UniqueCode"
        placeholder="PaymentUniqueKey"
    />
</>

const headers = <>
    <th>PaymentUniqueCode</th>
    <th>PaymentSuccessful</th>
</>

const row = entity => <>
    <td>{entity.uniqueCode}</td>
    <td>{entity.successful}</td>
</>

const Transactions = () => {
    return <List
        title="PaymentTransactions"
        entityType="Transaction"
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Transactions
