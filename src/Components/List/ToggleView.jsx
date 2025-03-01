import { useContext } from "react"
import Tooltip from "@mui/material/Tooltip"
import AppsIcon from "@mui/icons-material/Apps"
import HubIcon from "@mui/icons-material/Hub"
import TableRowsIcon from "@mui/icons-material/TableRows"
import {
    pascalize,
    t,
} from "App"
import { ListContext } from "Contexts"

const ToggleView = () => {

    const {
        listActionIconStyle,
        graph,
        setViewStyle,
        viewStyle,
    } = useContext(ListContext)

    const set = () => {
        if (viewStyle === "tabular") {
            if (graph) {
                setViewStyle("graph")
            }
            else {
                setViewStyle("cards")
            }
        }
        if (viewStyle === "cards") {
            setViewStyle("tabular")
        }
        if (viewStyle === "graph") {
            setViewStyle("tabular")
        }
    }

    let iconJsx = <></>
    if (viewStyle === "cards") {
        iconJsx = <AppsIcon className="dark:fill-white font-light" />
    }
    if (viewStyle === "tabular") {
        iconJsx = <TableRowsIcon className="dark:fill-white font-light" />
    }
    if (viewStyle === "graph") {
        iconJsx = <HubIcon className="dark:fill-white font-light" />
    }

    return <span
        className={listActionIconStyle}
        onClick={set}
    >
        <Tooltip
            disableInteractive
            title={t(`InfraSetViewStyleTo${pascalize(viewStyle === "tabular" ? "cards" : "tabular")}`)}
        >
            {iconJsx}
        </Tooltip>
    </span>
}

export default ToggleView
