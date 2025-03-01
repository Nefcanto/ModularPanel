import { useContext } from "react"
import TuneIcon from "@mui/icons-material/Tune"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageOptions = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="SettingsManageOptions"
        icon={TuneIcon}
        goTo={url({
            path: "/settings/options",
            query: {
                setting: entity.key
            }
        })}
    />
}

export default ManageOptions
