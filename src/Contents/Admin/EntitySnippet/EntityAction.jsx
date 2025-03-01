import { useContext } from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageEntitySnippets = () => {

    const { entity } = useContext(EntityContext)
    const entityType = entity.relatedItems.entityType
    const module = entity.relatedItems.module
    const apiUrl = url({
        path: "/entitySnippets",
        query: {
            entityGuid: entity.guid,
            entityType: entityType,
            module: module,
            pid: entity.id,
            pp: module,
            pt: entityType,
        }
    })

    return <EntityAction
        goTo={apiUrl}
        icon={ContentCopyIcon}
        title="ContentsContentSnippets"
    />
}

export default ManageEntitySnippets
