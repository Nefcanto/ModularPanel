import { useContext } from "react"
import { EntityContext } from "Contexts"

const PartProperty = () => {

    const { entity } = useContext(EntityContext)

    return <div>
        <div>{entity.partsPartTitle || entity.title}</div>
        <div>{entity.partsPartKey || entity.key}</div>
    </div>
}

export default PartProperty
