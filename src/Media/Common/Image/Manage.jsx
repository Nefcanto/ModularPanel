import { useContext } from "react"
import CollectionsIcon from "@mui/icons-material/Collections"
import {
    camelize,
    url,
} from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageImages = ({
    icon,
    tag,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)
    const entityType = entity.relatedItems.entityType
    const module = entity.relatedItems.module
    const query = {
        entity: entity.guid,
        entityType: entityType,
        module: module,
        pid: entity.id,
        pp: module,
        pt: entityType,
    }
    if (tag) {
        query.tag = tag
    }

    const getBasePath = () => {
        if (window?.routes?.find(i => i.path === `/${camelize(entityType)}/images`)) {
            return `/${camelize(entityType)}/images`
        }
        return "/media/images"
    }

    const apiUrl = url({
        path: getBasePath(),
        query
    })

    return <EntityAction
        goTo={apiUrl}
        icon={icon || CollectionsIcon}
        title="MediaManageImages"
        {...rest}
    />
}

export default ManageImages
