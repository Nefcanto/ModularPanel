import { List } from "List"
import BankAccountForm from "./Form"

const headers = <>
    <th>ContactsBank</th>
    <th>ContactsAccountNumber</th>
    <th>ContactsIban</th>
</>

const row = entity => <>
    <td>{entity?.bank}</td>
    <td>{entity?.accountNumber}</td>
    <td>{entity?.iban}</td>
</>

const BankAccounts = props => {
    return <List
    title="ContactsBankAccounts"
    entityType="BankAccount"
    headers={headers}
    row={row}
    create={BankAccountForm}
    hasEdit
    hasDelete
    {...props}
    />
}

export default BankAccounts
