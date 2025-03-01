import { useContext } from "react"
import ForumIcon from "@mui/icons-material/Forum"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageDiscussionPosts = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={`/forums/discussionPosts?discussionId=${entity.id}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}&entityHeteroGuid=${entity.guid}`}
        icon={ForumIcon}
        title="ForumsManageDiscussionPosts"
    />
}

export default ManageDiscussionPosts
