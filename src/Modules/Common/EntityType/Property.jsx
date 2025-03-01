import { useContext } from "react"
import { EntityContext } from "Contexts"

const EntityTypeProperty = () => {

    const { entity } = useContext(EntityContext)

    return <div>
        <div>{entity.modulesEntityTypeTitle || entity.title}</div>
        <div>{entity.modulesEntityTypeKey || entity.key}</div>
    </div>
}

export default EntityTypeProperty
