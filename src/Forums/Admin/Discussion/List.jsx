import {
    DateTimeTitleAgo,
    Enum,
    EnumProperty,
    List,
    Title,
} from "List"
import DiscussionFrom from "./Form"
import ManageDiscussionPosts from "../DiscussionPost/Manage"

const filters = <>
    <Title />
    <Enum
        entityType="ForumsState"
        placeholder="ForumsState"
        property="State"
    />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>ForumsAuthor</th>
    <th>InfraCreationDate</th>
    <th>ForumsState</th>
    <th>ForumsBoard</th>
    <th>ForumsForum</th>
</>

const row = entity => {

    const styleProvider = enumKey => {
        switch (enumKey) {
            case "approved":
                return "bg-green-400"
            case "pending":
                return "bg-amber-400"
            case "suspended":
                return "bg-red-400 text-white"
        }
    }

    return <>
        <td>
            {entity.title}
        </td>
        <td>
            {entity.contactsPersonDisplayName}
        </td>
        <DateTimeTitleAgo
            date={entity.creationUtcDate}
        />
        <EnumProperty
            actionUrl={`/discussion/changeState/${entity.id}`}
            currentKey={entity.state}
            currentKeyTranslation={entity.relatedItems.stateTranslation}
            currentStyle={styleProvider(entity.state)}
            enumeration="ForumsState"
            property="State"
            styleProvider={styleProvider}
        />
        <td>
            {entity.boardTitle}
        </td>
        <td>
            {entity.forumTitle}
        </td>
    </>
}

const entityActions = entity => <>
    <ManageDiscussionPosts />
</>

const Discussions = () => {

    return <List
        breadcrumbItems={[
            {
                title: "ForumsForums",
                link: "/forums/forums"
            },
            {
                title: "ForumsDiscussions"
            }
        ]}
        create={DiscussionFrom}
        entityActions={entityActions}
        entityType="Discussion"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        separateRowForActions
        title="ForumsDiscussions"
    />
}

export default Discussions
