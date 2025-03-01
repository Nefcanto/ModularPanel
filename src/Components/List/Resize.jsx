import {
    useContext,
    useState,
} from "react"
import Tooltip from "@mui/material/Tooltip"
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings"
import Slider from "@mui/material/Slider"
import { t } from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import Dialog from "../Dialog/Dialog"

const Resize = () => {

    const {
        listActionIconStyle,
        setWidth,
        width,
    } = useContext(ListContext)
    const [open, setOpen] = useState(false)

    const widthDialog = <Dialog
        large
        title="InfraResize"
        content={<Slider
            min={600}
            max={20_000}
            value={width || 600}
            onChange={(e, newValue) => {
                setWidth(newValue)
            }}
        />}
    />

    return <span
        className={listActionIconStyle}
    >
        <DialogContext.Provider
            value={{
                open,
                setOpen,
            }}
        >
            {widthDialog}
        </DialogContext.Provider>
        <Tooltip
            disableInteractive
            title={t("InfraResize")}
        >
            <DisplaySettingsIcon
                className="dark:fill-white font-light"
                onClick={() => setOpen(true)}
            />
        </Tooltip>
    </span>
}

export default Resize
