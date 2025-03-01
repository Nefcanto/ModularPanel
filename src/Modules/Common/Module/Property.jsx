import { useContext } from "react"
import { EntityContext } from "Contexts"

const ModuleProperty = () => {

    const { entity } = useContext(EntityContext)

    return <div>
        <div>{entity.modulesModuleTitle || entity.title}</div>
        <div>{entity.modulesModuleKey || entity.key}</div>
    </div>
}

export default ModuleProperty
