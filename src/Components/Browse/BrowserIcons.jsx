import { useContext } from "react"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import Tooltip from "@mui/material/Tooltip"
import ClearIcon from "@mui/icons-material/Clear"
import { t } from "App"
import {
    BrowseContext,
    DialogContext,
} from "Contexts"

const BrowserIcons = ({ onCleared }) => {

    const { setOpen } = useContext(DialogContext)

    const {
        progress,
        selectedEntity,
        setSelectedEntity,
    } = useContext(BrowseContext)

    return <InputAdornment
        disablePointerEvents={progress}
        disableTypography={progress}
        position="end"
    >
        {
            selectedEntity
                ?
                <Tooltip
                    disableFocusListener={progress}
                    disableInteractive={progress}
                    disableTouchListener={progress}
                    title={t("InfraClear")}
                >
                    <IconButton
                        disabled={progress}
                        onClick={() => {
                            setSelectedEntity(null)
                            if (onCleared instanceof Function) {
                                onCleared()
                            }
                        }}
                        onMouseDown={() => { }}
                        size="small"
                    >
                        <ClearIcon />
                    </IconButton>
                </Tooltip>
                :
                null
        }
        <Tooltip
            disableFocusListener={progress}
            disableInteractive={progress}
            disableTouchListener={progress}
            title={t("InfraFind")}
        >
            <IconButton
                disabled={progress}
                onClick={() => setOpen(true)}
                onMouseDown={() => { }}
                size="small"
            >
                <MoreHorizIcon />
            </IconButton>
        </Tooltip>
    </InputAdornment>
}

export default BrowserIcons
