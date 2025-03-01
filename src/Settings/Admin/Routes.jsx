import {
    EntitySettingsPageForm,
    Options,
} from "SettingsCommon"
import Settings from "./Setting/List"
import EntitySettings from "./EntitySetting/List"

const SettingsRoutes = [
    {
        path: "/settings/settings",
        component: Settings
    },
    {
        path: "/settings/entitySettings",
        component: EntitySettings
    },
    {
        path: "/entitySettings",
        component: EntitySettingsPageForm
    },
    {
        path: "/settings/options",
        component: Options
    }
]

export default SettingsRoutes
