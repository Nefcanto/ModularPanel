import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"

const CategoryProperty = props => {

    const { entity } = useContext(EntityContext)
    const { isTable } = useContext(ListContext)
    const { categories } = entity.relatedItems

    let jsx = <ul>
        {
            categories?.map(i => <li key={i.id}>{i.title}</li>)
        }
    </ul>

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default CategoryProperty
