import { useContext } from "react"
import ForumIcon from "@mui/icons-material/Forum"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageDiscussions = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={`/forums/discussions?boardId=${entity.id}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}&entityHeteroGuid=${entity.guid}`}
        icon={ForumIcon}
        title="ForumsManageDiscussions"
    />
}

export default ManageDiscussions
