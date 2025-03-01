import { useContext } from "react"
import { EntityContext } from "Contexts"
import {
    EnumItem,
    LabelValue,
} from "Panel"
import icon from "./Icon"

const ScopeProperty = props => {

    const {
        entity,
        isTable,
    } = useContext(EntityContext)
    const { scope } = entity.relatedItems

    let jsx = <EnumItem
        enumItem={scope}
        getIcon={icon}
        {...props}
    />

    if (!isTable) {
        jsx = <LabelValue
            label="ScopesScope"
            value={jsx}
            {...props}
        />
    }

    return jsx
}

export default ScopeProperty
