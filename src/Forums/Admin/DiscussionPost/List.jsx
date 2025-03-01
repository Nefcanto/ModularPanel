import {
    DateTimeTitleAgo,
    Enum,
    EnumProperty,
    List
} from "List"
import DiscussionPostFrom from "./Form"

const filters = <>
    <Enum
        entityType="ForumsState"
        placeholder="ForumsState"
        property="State"
    />
</>

const headers = <>
    <th>ForumsAuthor</th>
    <th>InfraCreationDate</th>
    <th>ForumsState</th>
    <th>ForumsDiscussion</th>
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
            {entity.contactsPersonDisplayName}
        </td>
        <DateTimeTitleAgo
            date={entity.creationUtcDate}
        />
        <EnumProperty
            actionUrl={`/discussionPost/changeState/${entity.id}`}
            currentKey={entity.state}
            currentKeyTranslation={entity.relatedItems.stateTranslation}
            currentStyle={styleProvider(entity.state)}
            enumeration="ForumsState"
            property="State"
            styleProvider={styleProvider}
        />
        <td>
            {entity.discussionTitle}
        </td>
        <td>
            {entity.boardTitle}
        </td>
        <td>
            {entity.forumTitle}
        </td>
    </>
}

const DiscussionPosts = () => {

    return <List
        breadcrumbItems={[
            {
                title: "ForumsForums",
                link: "/forums/forums"
            },
            {
                title: "ForumsDiscussionPosts"
            }
        ]}
        create={DiscussionPostFrom}
        entityType="DiscussionPost"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        separateRowForActions
        title="ForumsDiscussionPosts"
    />
}

export default DiscussionPosts
