import { List } from "List"
import SequencePostForm from "./Form"

const headers = <>
    <td>InfraTitle</td>
</>

const row = entity => <>
    <td>{entity.postTitle}</td>
</>

const SequencePosts = () => <List
    title="BlogSequencePosts"
    entityType="SequencePost"
    headers={headers}
    row={row}
    create={SequencePostForm}
    upsertionText="InfraAdd"
    hasDelete
/>

export default SequencePosts
