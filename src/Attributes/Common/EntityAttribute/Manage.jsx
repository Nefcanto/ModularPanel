import { useContext } from "react"
import RuleIcon from "@mui/icons-material/Rule"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const AssignAttributes = ({ from }) => {

    const { entity } = useContext(EntityContext)
    const link = url({
        granularity: "entity",
        granularityExtractionEntity: entity,
        granularAssignment: true,
        parent: entity,
        path: from || "/attributes/entityAttributes/upsert",
    })

    return <EntityAction
        goTo={link}
        icon={RuleIcon}
        title="AttributesAssignAttributes"
    />
}

export default AssignAttributes
