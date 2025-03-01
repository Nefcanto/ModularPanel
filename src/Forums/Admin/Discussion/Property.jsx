import { EnumProperty } from "List"
import { useContext } from "react"
import { EntityContext } from "Contexts"

const styleProvider = state => {
    let style = state?.toLowerCase() + " "
    switch (state?.toLowerCase()) {
        case "unknown":
            style += "bg-blue-400"
            break
        case "approved":
            style += "bg-green-400"
            break
        case "pending":
            style += "bg-yellow-400"
            break
        case "suspended":
            style += "bg-red-400"
            break
        default:
            style += ""
    }
    return style
}

const StateProperty = () => {

    const { entity } = useContext(EntityContext)

    return <EnumProperty
        actionUrl={`/${entity.relatedItems.entityType}/changeState/${entity.id}`}
        currentKey={entity.state}
        currentKeyTranslation={entity.relatedItems.stateTranslation}
        currentStyle={styleProvider(entity.state)}
        enumeration="DiscussionState"
        property="State"
        styleProvider={styleProvider}
        title={entity.relatedItems.reason}
    />
}

export default StateProperty
