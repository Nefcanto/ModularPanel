import { useContext } from "react"
import GrainIcon from "@mui/icons-material/Grain"
import HubIcon from "@mui/icons-material/Hub"
import { url } from "App"
import { EntityContext } from "Contexts"
import EntityAction from "./EntityAction"

const Graph = ({
}) => {

    const { entity } = useContext(EntityContext)
    const entityType = entity.relatedItems.entityType
    const module = entity.relatedItems.module

    let panelUrl = url({
        path: "/graph",
        query: {
            entityType: entityType,
            id: entity.id,
            module: module,
            pid: entity.id,
            pp: module,
            pt: entityType,
        }
    })

    return <EntityAction
        goTo={panelUrl}
        icon={HubIcon}
        title="InfraGraph"
    />
}

export default Graph
