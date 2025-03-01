import { EnumItem } from "Panel"
import { Enum } from "Form"
import icon from "./Icon"

const ScopeField = () => {
    return <Enum
        choose={item => item.key}
        entityType="Scope"
        placeholder="ScopesScope"
        property="Scope"
        required
        show={enumItem => <EnumItem
            enumItem={enumItem}
            getIcon={icon}
        />}
    />
}

export default ScopeField
