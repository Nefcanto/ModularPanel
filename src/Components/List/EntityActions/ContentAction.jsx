import { useContext } from "react"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"
import { camelize } from "App"
import { EntityContext } from "Contexts"
import EntityAction from "./EntityAction"

const ContentAction = ({
    centralized,
    contentEntityType,
    contentIdChooser,
    contentModule,
}) => {

    const entityContext = useContext(EntityContext)
    const { entity } = entityContext
    const id = contentIdChooser ? contentIdChooser(entity) : entity.id
    const module = contentModule || entity.relatedItems.module
    const entityType = contentEntityType || camelize(entity.relatedItems.entityType).replace(camelize(entity.relatedItems.module), "") + "Content"
    const finalEntityType = entityType.endsWith("Content") ? entityType : entityType + "Content"

    let url = `/content?id=${id}&entityType=${finalEntityType}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`
    if (centralized) {
        url += `&centralized=${centralized}&module=${module}`
    }

    return <EntityAction
        goTo={url}
        icon={TextSnippetIcon}
        title="InfraEditContent"
    />
}

export default ContentAction
