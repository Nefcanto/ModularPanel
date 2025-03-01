import { EnumItem } from "Panel"
import { Enum } from "Form"
import icon from "./Icon"

const InterfaceField = () => {
    return <Enum
        choose={item => item.key}
        entityType="Interface"
        placeholder="InterfacesInterface"
        property="Interface"
        required
        show={enumItem => <EnumItem
            enumItem={enumItem}
            getIcon={icon}
        />}
    />
}

export default InterfaceField
