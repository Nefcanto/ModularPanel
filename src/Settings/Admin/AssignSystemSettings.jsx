import SettingsIcon from "@mui/icons-material/Settings"
import { HeaderAction } from "Panel"
import { url } from "App"

const AssignSystemSettings = () => {

    const link = url({
        path: "/entitySettings",
        granularAssignment: true,
    })

    return <HeaderAction
        icon={SettingsIcon}
        path={link}
        title="SettingsApplySystemSettings"
    />
}

export default AssignSystemSettings
