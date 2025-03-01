import SettingsIcon from "@mui/icons-material/Settings"
import { url } from "App"

const SettingsMenu = [
    {
        title: "SettingsSettings",
        icon: SettingsIcon,
        children: [
            {
                title: "InfraDefining",
                path: "/settings/settings"
            },
            {
                title: "InfraApplying",
                path: "/settings/entitySettings"
            },
            {
                title: "SettingsSystemSettings",
                path: url({
                    path: "/entitySettings",
                    granularAssignment: true,
                })
            }
        ]
    }
]

export default SettingsMenu
