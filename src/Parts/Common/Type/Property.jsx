import { useContext } from "react"
import { EntityContext } from "Contexts"

const TypeProperty = () => {

    const { entity } = useContext(EntityContext)

    return <div>
        <div>{entity.partsTypeTitle || entity.title}</div>
        <div>{entity.partsTypeKey || entity.key}</div>
    </div>
}

export default TypeProperty
