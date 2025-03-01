import {
    List,
    Text,
} from "List"
import { AddPersonListAction } from "Contacts"
import PersonCommissionDefaultFrom from "./Form"

const listActions = <>
    <AddPersonListAction/>
</>

const filters = <>
    <Text
        property="PersonDisplayName"
    />
</>

const headers = <>
    <th>CommissionsPersonDisplayName</th>
    <th>CommissionsDefaultCommissionValue</th>
</>

const row = entity => <>
    <td>{entity.contactsPersonDisplayName}</td>
    <td>{entity.defaultCommissionValue}</td>
</>

const PersonCommissionDefaults = () => {
    return <List
        title="CommissionsPersonCommissionDefaults"
        entityType="PersonCommissionDefault"
        create={PersonCommissionDefaultFrom}
        filters={filters}
        headers={headers}
        row={row}
        hasEdit
        hasDelete
    />
}

export default PersonCommissionDefaults
