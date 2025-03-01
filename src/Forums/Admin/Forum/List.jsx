import ForumIcon from "@mui/icons-material/Forum"
import {
    EntityAction,
    Image,
    List,
    Text,
    Title,
} from "List"
import { AssignEntityTypeSettings } from "Settings"
import ForumFrom from "./Form"

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
    <th></th>
    <th>InfraTitle</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <Image />
    <td>{entity.title}</td>
    <td>{entity.slug}</td>
</>

const entityActions = entity => <>
    <EntityAction
        goTo={`/forums/boards?forumId=${entity?.id}&pp=forums&pt=forum&pid=${entity.id}`}
        icon={ForumIcon}
        title="ForumsManageBoards"
    />
</>

const Forums = () => {

    return <List
        create={ForumFrom}
        entityActions={entityActions}
        entityType="Forum"
        filters={filters}
        hasDelete
        hasEdit
        headers={headers}
        listActions={listActions}
        row={row}
        title="ForumsForums"
    />
}

export default Forums
