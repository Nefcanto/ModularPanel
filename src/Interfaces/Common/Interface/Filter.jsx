import { EnumItem } from "Panel"
import { Enum } from "List"
import icon from "./Icon"

const InterfaceFilter = () => {

    return <Enum
        entityType="Interface"
        placeholder="InterfacesInterface"
        property="Interface"
        show={enumItem => <EnumItem
            enumItem={enumItem}
            getIcon={icon}
        />}
    />
}

export default InterfaceFilter
