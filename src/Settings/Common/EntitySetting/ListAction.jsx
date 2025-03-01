import { useContext } from "react"
import SettingsIcon from "@mui/icons-material/Settings"
import { url } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const AssignEntityTypeSettings = () => {

    const {
        camelizedEntityType,
        camelizedModule,
    } = useContext(ListContext)

    const link = url({
        path: "/entitySettings",
        granularity: "entityType",
        granularityExtractionEntity: {
            entityType: camelizedEntityType,
            module: camelizedModule,
        }
    })

    return <ListAction
        icon={SettingsIcon}
        superAdmin
        title="SettingsApplySettings"
        url={link}
    />
}

export default AssignEntityTypeSettings
