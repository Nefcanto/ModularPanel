import {
    DateTimeTitleAgo,
    List,
    Text,
} from "List"
import WarrantyCardForm from "./Form"

const filters = <>
    <Text
        property="WarrantyNumber"
        placeholder="WarrantyWarrantyNumber"
    />
    <Text
        property="ContactsPersonDisplayName"
        placeholder="InfraName"
    />
</>

const headers = <>
    <th>WarrantyWarrantyNumber</th>
    <th>InfraStartDate</th>
    <th>InfraEndDate</th>
    <th>InfraName</th>
</>

const row = entity => <>
    <td>{entity.warrantyNumber}</td>
    <DateTimeTitleAgo
        date={entity.startUtcDate}
    />
    <DateTimeTitleAgo
        date={entity.endUtcDate}
    />
    <td>{entity.contactsPersonDisplayName}</td>
</>

const Contracts = () => {
    return <List
        title="WarrantyWarrantyCards"
        entityType="WarrantyCard"
        filters={filters}
        headers={headers}
        row={row}
        create={WarrantyCardForm}
        hasEdit
        hasDelete
    />
}

export default Contracts
