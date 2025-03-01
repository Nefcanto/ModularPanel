import { List } from "List"
import { AddPersonListAction } from "Contacts"
import RelatedPersonForm from "./Form"

const listActions = <>
    <AddPersonListAction />
</>

const headers = <>
    <th>ContractsRelationType</th>
    <th>ContactsPersonName</th>
</>

const row = entity => <>
    <td>{entity?.relationTypeTitle}</td>
    <td>{entity?.contactsPersonDisplayName}</td>
</>

const RelatedPersons = () => {
    return <List
        title="ContractsRelatedPersons"
        entityType="RelatedPerson"
        breadcrumbItems={[
            {
                title: "ContractsContracts",
                link: "/contracts"
            },
            {
                title: "ContractsRelatedPersons"
            },
        ]}
        create={RelatedPersonForm}
        listActions={listActions}
        headers={headers}
        row={row}
        hasEdit
        hasDelete
    />
}

export default RelatedPersons
