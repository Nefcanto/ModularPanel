import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"

const UnitProperty = props => {

    const entity = props?.entity || useContext(EntityContext)?.entity
    const {
        card,
        isTable,
    } = useContext(ListContext)

    let jsx = <div>{entity.unitsUnitTitle || entity.title}</div>

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default UnitProperty
