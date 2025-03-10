import { useContext } from "react"
import Tooltip from "@mui/material/Tooltip"
import CachedIcon from "@mui/icons-material/Cached"
import app from "App"
import { ListContext } from "Contexts"

const Reload = () => {

    const {
        listActionIconStyle,
        reload
    } = useContext(ListContext)

    return <span
        id="reload"
        onClick={reload}
        className={listActionIconStyle}
    >
        <Tooltip
            title={app.t("InfraReload")}
            disableInteractive
        >
            <CachedIcon className="dark:fill-white font-light" />
        </Tooltip>
    </span>
}

export default Reload
