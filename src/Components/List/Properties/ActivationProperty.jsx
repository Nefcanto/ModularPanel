import { useContext } from "react"
import { EntityContext } from "Contexts"
import BooleanProperty from "./BooleanProperty"

const ActivationProperty = () => {

    const { entity } = useContext(EntityContext)

    return <BooleanProperty
        actionUrl={`/${entity.relatedItems.entityType}/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
        trueLabel="InfraYes"
        falseLabel="InfraNo"
    />
}

export default ActivationProperty
