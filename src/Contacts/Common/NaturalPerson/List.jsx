import AttributionIcon from "@mui/icons-material/Attribution"
import BusinessIcon from "@mui/icons-material/Business"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import HomeIcon from "@mui/icons-material/Home"
import {
    EntityAction,
    Image,
    List,
} from "List"
import NaturalPersonForm from "./Form"
import EditPerson from "../Person/Edit"
import { ContactHeaders } from "ContactsCommon"

const headers = <>
    <th></th>
    <th>InfraName</th>
    {ContactHeaders}
</>

const row = entity => <>
    <Image
        url={entity.relatedItems?.personImageUrl}
    />
    <td>{entity.fullName || entity.naturalPersonName}</td>
    <td>{entity.defaultEmail}</td>
    <td>{entity.defaultPhone}</td>
    <td>{entity.website}</td>
</>

const entityActions = entity => <>
    <EditPerson />
    <EntityAction
        title="ContactsRelations"
        icon={BusinessIcon}
        goTo={`/relations?naturalPersonId=${entity?.id}`}

    />
    <EntityAction
        title="ContactsAddresses"
        icon={HomeIcon}
        goTo={`/addresses?contactId=${entity.contactsContactId}`}
    />
    <EntityAction
        title="ContactsPhones"
        icon={ContactPhoneIcon}
        goTo={`/phones?contactId=${entity.contactsContactId}`}
    />
    <EntityAction
        title="ContactsBankAccounts"
        icon={AccountBalanceIcon}
        goTo={`/bankAccounts?contactId=${entity.contactsContactId}`}
    />
    <EntityAction
        title="ContactsPersonAttributes"
        icon={AttributionIcon}
        goTo={`/person/attributes?personId=${entity.id}&pp=contacts&pt=juridicalPerson&pid=${entity.id}`}
    />
</>

const NaturalPersons = props => {
    return <List
        {...props}
        create={NaturalPersonForm}
        entityActions={entityActions}
        entityType="NaturalPerson"
        hasDelete
        headers={headers}
        row={row}
        title="ContactsNaturalPersons"
    />
}

export default NaturalPersons
