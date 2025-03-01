import HomeIcon from "@mui/icons-material/Home"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import AttributionIcon from "@mui/icons-material/Attribution"
import { ContactHeaders } from "ContactsCommon"
import JuridicalPersonForm from "./Form"
import {
    EntityAction,
    Image,
    List,
} from "List"

const headers = <>
    <th></th>
    <th>InfraName</th>
    {ContactHeaders}
</>

const row = entity => <>
    <Image
        url={entity.relatedItems?.personImageUrl}
    />
    <td>{entity.name}</td>
    <td>{entity.defaultEmail}</td>
    <td>{entity.defaultPhone}</td>
    <td>{entity.website}</td>
</>

const entityActions = entity => <>
    <EntityAction
        goTo={`/addresses?contactId=${entity.contactsContactId}`}
        icon={HomeIcon}
        title="Addresses"
    />
    <EntityAction
        goTo={`/phones?contactId=${entity.contactsContactId}`}
        icon={ContactPhoneIcon}
        title="Phones"
    />
    <EntityAction
        goTo={`/bankAccounts?contactId=${entity.contactsContactId}`}
        icon={AccountBalanceIcon}
        title="ContactsBankAccounts"
    />
    <EntityAction
        goTo={`/person/attributes?personId=${entity.id}&pp=contacts&pt=juridicalPerson&pid=${entity.id}`}
        icon={AttributionIcon}
        title="Attributes"
    />
</>

const JuridicalPersons = () => {
    return <List
        create={JuridicalPersonForm}
        entityActions={entityActions}
        entityType="JuridicalPerson"
        hasEdit
        headers={headers}
        row={row}
        title="ContactsJuridicalPersons"
    />
}

export default JuridicalPersons
