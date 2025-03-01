import {
    List,
    Text,
    Title,
} from "List"
import BoardFrom from "./Form"
import ManageDiscussions from "../Discussion/Manage"
import { AssignEntityTypeSettings } from "Settings"

const listActions = <>
    <AssignEntityTypeSettings />
</>

const filters = <>
    <Title />
    <Text
        placeholder="InfraSlug"
        property="Slug"
    />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>InfraSlug</th>
    <th>ForumsForum</th>
    <th>ForumsLastDiscussion</th>
</>

const row = entity => <>
    <td>
        {entity.title}
    </td>
    <td>
        {entity.slug}
    </td>
    <td>
        {entity.forumTitle}
    </td>
    <td>
        {entity.relatedItems.lastDiscussion?.title}
    </td>
</>

const entityActions = entity => <>
    <ManageDiscussions />
</>

const Boards = () => {

    return <List
        create={BoardFrom}
        entityActions={entityActions}
        entityType="Board"
        filters={filters}
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="ForumsBoards"
    />
}

export default Boards
