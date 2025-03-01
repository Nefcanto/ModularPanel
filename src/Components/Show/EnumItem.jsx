import { useContext } from "react"
import {
    FilterContext,
    FormContext,
    ListContext,
} from "Contexts"
import HolismIcon from "../HolismIcon"

const EnumItem = ({
    enumItem,
    getIcon,
    ...rest
}) => {

    const { isTable } = useContext(ListContext) || {}
    const filterContext = useContext(FilterContext)
    const formContext = useContext(FormContext)
    const isInsideForm = formContext ? true : false

    let jsx = <span>N/A</span>

    if (enumItem) {
        jsx = <span>
            {getIcon && getIcon instanceof Function && getIcon(enumItem) && <HolismIcon icon={getIcon(enumItem)} />}
            <span className="ms-2">{enumItem.translation}</span>
            {enumItem.translation.toLowerCase() !== (enumItem.titleizedKey || enumItem.title).toLowerCase() && <span> - {enumItem.titleizedKey || enumItem.title}</span>}
        </span>
    }

    if (isTable && !isInsideForm) {
        jsx = <td {...rest}>
            {jsx}
        </td>
    }

    return enumItem
        ?
        jsx
        :
        null
}

export default EnumItem
