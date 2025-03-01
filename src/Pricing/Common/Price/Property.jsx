import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import price from "./Price"

const PriceProperty = props => {

    const entity = props?.entity || useContext(EntityContext)?.entity
    const { isTable } = useContext(ListContext)

    let jsx = price(entity)

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default PriceProperty
