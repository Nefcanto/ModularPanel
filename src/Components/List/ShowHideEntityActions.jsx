import { useContext } from "react"
import Tooltip from "@mui/material/Tooltip"
import Switch from "@mui/material/Switch";
import app from "App"
import { ListContext } from "Contexts"

const ShowHideEntityActions = ({ className }) => {

    const {
        menuForActions,
        hasData,
        entityActions,
        hasDelete,
        hasEdit,
        edit,
        hiddenEntityActions,
        setHiddenEntityActions,
    } = useContext(ListContext)

    return !menuForActions && hasData && (entityActions || hasDelete || hasEdit || edit) &&
        <Tooltip
            disableInteractive
            title={hiddenEntityActions ? app.t("InfraShowActions") : app.t("InfraHideActions")}
        >
            <Switch
                size="small"
                checked={!hiddenEntityActions}
                onChange={(e) => setHiddenEntityActions(!hiddenEntityActions)}
            />
        </Tooltip>
}

export default ShowHideEntityActions
