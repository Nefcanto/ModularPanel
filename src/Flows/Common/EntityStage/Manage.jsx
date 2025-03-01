import { useContext } from "react"
import RouteIcon from "@mui/icons-material/Route"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageEntityStages = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={url({
            granularity: "entity",
            granularityExtractionEntity: entity,
            parent: entity,
            path: "/entityStages",
        })}
        icon={RouteIcon}
        title="FlowsManageStages"
    />
}

export default ManageEntityStages
