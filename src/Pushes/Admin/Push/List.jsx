import {
    DateTimeTitleAgo,
    List,
    Text,
} from "List"

const filters = <>
    <Text property="Pusher" />
</>

const headers = <>
    <th>Pusher</th>
    <th>Link</th>
    <th>Date</th>
</>

const row = entity => <>
    <td>{entity.pusher}</td>
    <td><a href={entity.link} target="_blank">Link</a></td>
    <td>
        <DateTimeTitleAgo
            date={entity.utcDate}
            ago={entity.relatedItems.timeAgo}
        />
    </td>
</>

const Pushes = () => {
    return <List
        title="Pushes"
        entityType="Push"
        filters={filters}
        headers={headers}
        row={row}
        hasDelete
        deleteBatch
        deleteAll
    />
}

export default Pushes
