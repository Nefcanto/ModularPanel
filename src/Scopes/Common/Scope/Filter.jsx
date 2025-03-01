import { EnumItem } from "Panel"
import { Enum } from "List"
import icon from "./Icon"

const ScopeFilter = () => {

    return <Enum
        entityType="Scope"
        placeholder="ScopesScope"
        property="Scope"
        show={enumItem => <EnumItem
            enumItem={enumItem}
            getIcon={icon}
        />}
    />
}

export default ScopeFilter
