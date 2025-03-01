import ListIcon from "@mui/icons-material/List"
import {
    EntityAction,
    List,
} from "List"
import SequenceForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
</>

const entityActions = entity => <>
    <EntityAction
        goTo={`/blog/sequence/posts?sequence=${entity.guid}`}
        icon={ListIcon}
        title="BlogManagePosts"
    />
</>

const Sequences = () => {
    return <List
        create={SequenceForm}
        entityActions={entityActions}
        entityType="Sequence"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="BlogSequences"
    />
}

export default Sequences
