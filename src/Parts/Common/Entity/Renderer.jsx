import { useContext } from "react"
import app from "App"
import { EntityContext } from "Contexts"
import EntityRenderers from "EntityRenderers"

const EntityRenderer = () => {

    const { entity } = useContext(EntityContext)

    return <EntityRenderers
        part={app.pascalize(entity.relatedItems.entity?.relatedItems?.part)}
        type={app.pascalize(entity.relatedItems.entity?.relatedItems?.type)}
        entity={entity.relatedItems.entity || entity.entity}
    />
}

export default EntityRenderer
