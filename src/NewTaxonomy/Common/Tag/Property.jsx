import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"

const TagProperty = props => {

    const { entity } = useContext(EntityContext)
    const { isTable } = useContext(ListContext)
    const { tags } = entity.relatedItems

    let jsx = <ul>
        {
            tags?.map(i => <li key={i.id}>{i.title}</li>)
        }
    </ul>

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default TagProperty
