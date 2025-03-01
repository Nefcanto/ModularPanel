import { useContext } from "react"
import ReplayIcon from "@mui/icons-material/Replay"
import { t } from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import EntityAction from "./EntityAction"

const ReloadEntityAction = () => {

    const { reloadEntity } = useContext(ListContext)
    const { entity } = useContext(EntityContext)

    return <EntityAction
        icon={<ReplayIcon style={{ color: "rgb(37 99 235)" }} />}
        onClick={() => reloadEntity(entity)}
        title={t("InfraReload")}
    />
}

export default ReloadEntityAction
