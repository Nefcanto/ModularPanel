import { useContext } from "react"
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"
import { url } from "App"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"

const ManageVideos = () => {

    const { entity } = useContext(EntityContext)
    const entityType = entity.relatedItems.entityType
    const module = entity.relatedItems.module
    const apiUrl = url({
        path: "/media/videos",
        query: {
            entity: entity.guid,
            entityType: entityType,
            module: module,
            pid: entity.id,
            pp: module,
            pt: entityType,
        }
    })

    return <EntityAction
        goTo={apiUrl}
        icon={VideoLibraryIcon}
        title="MediaManageVideos"
    />
}

export default ManageVideos
