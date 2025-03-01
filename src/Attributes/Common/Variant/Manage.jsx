import { useContext } from "react"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import { url } from "App"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"

const ManageVariants = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={url({
            path: "/attributes/variants",
            granularity: "entityType",
            granularityExtractionEntity: entity,
            parent: entity,
        })}
        icon={DynamicFeedIcon}
        title="AttributesManageVariants"
    />
}

export default ManageVariants
