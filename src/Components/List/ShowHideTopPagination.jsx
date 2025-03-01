import { useContext } from "react"
import Tooltip from "@mui/material/Tooltip"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import { t } from "App"
import { ListContext } from "Contexts"

const ShowHideTopPagination = () => {

    const {
        isTree,
        hasData,
        showTopPagination,
        setTopPaginationVisibility,
        listActionIconStyle
    } = useContext(ListContext)

    return !isTree && hasData && <span
        id="showHideTopPagination"
        className={listActionIconStyle}
        onClick={() => setTopPaginationVisibility(!showTopPagination)}
    >
        <Tooltip
            disableInteractive
            title={t(showTopPagination ? "InfraHideTopPagination" : "InfraShowTopPagination")}
        >
            <SwapHorizIcon />
        </Tooltip>
    </span>
}

export default ShowHideTopPagination
