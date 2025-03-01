import { EnumProperty } from "List"

const styleProvider = entity => {
    let style = entity?.state?.toLowerCase() + " "
    switch (entity?.state?.toLowerCase()) {
        case "new":
            style += "bg-blue-200"
            break
        case "approved":
            style += "bg-green-200"
            break
        case "rejected":
            style += "bg-red-200 dark:bg-red-600"
            break
        case "edited":
            style += "bg-yellow-200"
            break
        default:
            style += ""
    }
    return style
}

const StateProperty = entity => <EnumProperty
    actionUrl={`/podcast/changeState/${entity.id}`}
    currentKey={entity.state}
    currentKeyTranslation={entity.relatedItems.stateTranslation}
    currentStyle={styleProvider(entity)}
    enumeration="EpisodeState"
    property="State"
    styleProvider={styleProvider}
    title={entity.relatedItems.reason}
/>

export default StateProperty
