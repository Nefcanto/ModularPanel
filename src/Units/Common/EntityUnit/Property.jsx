import { useContext } from "react"
import { EntityContext } from "Contexts"
import { LabelValue } from "Panel"

const EntityUnitsProperty = props => {

    const {
        entity,
        isTable,
    } = useContext(EntityContext)
    const { entityUnits } = entity.relatedItems

    let jsx = <>
    </>

    if (entityUnits && entityUnits.map) {
        jsx = <span className="flex gap-1">
            {
                entityUnits.map((entityUnit, index) => (
                    <span
                        className="flex items-center gap-1"
                        key={index}
                    >
                        {entityUnit.title}
                        {index < entityUnits.length - 1 && <span className="mx-1">-</span>}
                    </span>
                ))
            }
        </span>
    }

    if (!isTable) {
        jsx = <LabelValue
            label="UnitsUnits"
            value={jsx}
            {...props}
        />
    }

    return jsx
}

export default EntityUnitsProperty
