import { List } from "List"
import RelationForm from "./Form"
import NaturalPersonFilter from "../NaturalPerson/Filter"
import JuridicalPersonFilter from "../JuridicalPerson/Filter"

const filters = <>
    <JuridicalPersonFilter />
    <NaturalPersonFilter />
</>

const headers = <>
    <th>Juridical</th>
    <th>Natural</th>
    <th>Job</th>
</>

const row = entity => <>
    <td>{entity.juridicalPersonName}</td>
    <td>{entity.fullName}</td>
    <td>{entity.jobTitleText}</td>
</>

const Relations = props => {
    return <List
        create={RelationForm}
        entityType="Relation"
        filters={filters}
        hasDelete
        headers={headers}
        row={row}
        title="ContactsRelations"
        {...props}
    />
}

export default Relations
