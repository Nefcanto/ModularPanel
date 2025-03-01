import { useContext } from "react"
import Tooltip from "@mui/material/Tooltip"
import ClearIcon from "@mui/icons-material/Clear"
import { t } from "App"
import { ListContext } from "Contexts"

const RemoveState = () => {

    const {
        listActionIconStyle,
        state,
        setState,
    } = useContext(ListContext)

    return state
        ?
        <span
            id="clearState"
            className={"relative " + listActionIconStyle}
            onClick={() => setState("")}
        >
            <span className="absolute w-2/3 h-2/3 m-auto top-0 end-0 bottom-0 start-0 bg-red-600 animate-ping rounded-full"></span>
            <Tooltip
                disableInteractive
                className="relative z-10"
                title={`${t("InfraRemovingState")} - ${t(state)}`}
            >
                <ClearIcon className="dark:fill-white font-light" />
            </Tooltip>
        </span>
        :
        null
}

export default RemoveState
