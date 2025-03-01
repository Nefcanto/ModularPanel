import { useContext } from "react"
import { EntityContext } from "Contexts"
import {
    EnumItem,
    LabelValue,
} from "Panel"
import icon from "./Icon"

const InterfaceProperty = props => {

    const {
        entity,
        isTable,
    } = useContext(EntityContext)
    const interfaceItem = entity.interface

    let jsx = <EnumItem
        enumItem={interfaceItem}
        getIcon={icon}
        {...props}
    />

    if (!isTable) {
        jsx = <LabelValue
            label="InterfacesInterface"
            value={jsx}
            {...props}
        />
    }

    return jsx
}

export default InterfaceProperty
