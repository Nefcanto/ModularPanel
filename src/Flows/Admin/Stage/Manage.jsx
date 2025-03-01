import { useContext } from "react"
import AnimationIcon from "@mui/icons-material/Animation"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"
import { url } from "App"

const ManageStages = () => {

    const { entity } = useContext(EntityContext || {})

    return <EntityAction
        goTo={url({
            path: "/flowStages",
            query: {
                flow: entity.key
            },
            parent: entity,
        })}
        icon={AnimationIcon}
        title="FlowsSetStages"
    />
}

export default ManageStages
