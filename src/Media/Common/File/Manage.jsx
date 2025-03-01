import { useContext } from "react"
import { url } from "App"
import { EntityContext } from "Contexts"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import { EntityAction } from "List"

const ManageFiles = () => {

    const { entity } = useContext(EntityContext)

    const apiLink = url({
        path: "/media/files",
        query: {
            module: entity.relatedItems.module,
            entityType: entity.relatedItems.entityType,
            entity: entity.guid
        }
    })

    return <EntityAction
        goTo={apiLink}
        icon={AttachFileIcon}
        title="MediaManageFiles"
    />
}

export default ManageFiles
