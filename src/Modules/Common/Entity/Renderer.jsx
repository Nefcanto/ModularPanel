import { useContext } from "react"
import app from "App"
import { EntityContext } from "Contexts"
import EntityRenderers from "EntityRenderers"

const EntityRenderer = () => {

    const { entity } = useContext(EntityContext)

    return <EntityRenderers
        module={app.pascalize(entity.relatedItems.entity?.relatedItems?.module)}
        entityType={app.pascalize(entity.relatedItems.entity?.relatedItems?.entityType)}
        entity={entity.relatedItems.entity || entity.entity}
    />
}

export default EntityRenderer
