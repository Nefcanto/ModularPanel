import { useContext } from "react"
import SettingsIcon from "@mui/icons-material/Settings"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const AssignSettings = ({
    from,
    hetero,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)
    const link = url({
        granularAssignment: true,
        granularity: "entity",
        granularityExtractionEntity: entity,
        hetero: hetero,
        parent: entity,
        path: from || "/entitySettings",
    })

    return <EntityAction
        goTo={link}
        icon={SettingsIcon}
        title="SettingsApplySettings"
        {...rest}
    />
}

export default AssignSettings
