import {
    List,
} from "List"
import { AddUserAction } from "Accounts"
import {
    EditPerson,
    PersonImage
} from "Contacts"
import filters from "./Filters"
import headers from "./Headers"

const listActions = () => {
    return <>
        <AddUserAction
            title="PodcastSpeakers"
            entityType="Speaker"
        />
    </>
}

const row = entity => <>
    <PersonImage
        person={entity}
    />
    <td>
        {entity.displayName}
    </td>
</>

const entityActions = entity => <>
    <EditPerson
        phones
        entity={entity}
    />
</>

const Speakers = () => {
    return <List
        title="PodcastSpeakers"
        entityType="Speaker"
        listActions={listActions}
        filters={filters}
        headers={headers}
        row={row}
        entityActions={entityActions}
        hasDelete
    />
}

export default Speakers
