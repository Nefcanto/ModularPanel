
import Tooltip from "@mui/material/Tooltip"
import { t } from "App"

const Chip = ({
    className,
    onClick,
    style,
    text,
    tooltip
}) => {
    return <span
        className={"py-1 px-3 rounded-full text-xs inline-block " + className}
        onClick={() => {
            onClick instanceof Function && onClick()
        }}
        style={style}
    >
        <Tooltip
            title={tooltip}
        >
            {t(text)}
        </Tooltip>
    </span>
}

export default Chip
