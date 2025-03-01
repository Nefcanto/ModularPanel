import { useContext } from "react"
import DataObjectIcon from "@mui/icons-material/DataObject"
import {
    getJsonHtml,
    t,
} from "App"
import {
    EntityContext,
    PanelContext,
} from "Contexts"
import Dialog from "../../Dialog/Dialog"
import EntityAction from "./EntityAction"

const ViewRecordAction = () => {

    const { entity } = useContext(EntityContext)
    const { isDark } = useContext(PanelContext)

    const dialog = <Dialog
        content={getJsonHtml(entity, 1, isDark)}
        title="InfraViewRecord"
    />

    return <EntityAction
        dialog={dialog}
        icon={<DataObjectIcon style={{ color: "rgb(37 99 235)" }} />}
        onClick={() => window.entity = entity}
        title={t("InfraViewRecord")}
    />
}

export default ViewRecordAction
