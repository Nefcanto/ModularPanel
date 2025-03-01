import { useContext } from "react"
import { EntityContext } from "Contexts"

const KeySegmentProperty = props => {

    const {
        entity,
        isTable,
    } = useContext(EntityContext)

    let jsx = <div>{entity.relatedItems.keySegment || entity.key}</div>

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default KeySegmentProperty
