import TypeForm from "./Form"
import {
    List,
    Title,
} from "List"

const filters = <>
    <Title />
</>

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity?.title}</td>
</>

const RelationTypes = () => {
    return <List
        title="ContractsRelationTypes"
        entityType="RelationType"
        filters={filters}
        headers={headers}
        create={TypeForm}
        hasEdit
        hasDelete
        row={row}
    />
}

export default RelationTypes
