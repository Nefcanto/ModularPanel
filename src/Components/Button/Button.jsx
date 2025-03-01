import { useState } from "react"
import MuiButton from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { t } from "App"
import { useMessage } from "Hooks"
import HolismIcon from "../HolismIcon"
import Progress from "../Progress"

const Button = ({
    className,
    onClick,
    color,
    disabled,
    icon,
    progress,
    small,
    text,
    title,
}) => {

    const [internalProgress, setInternalProgress] = useState(false)
    const { error, success } = useMessage()

    if (icon && !text) {
        return <IconButton
            color={color || "primary"}
            component="span"
            className={className}
            disabled={disabled}
        >
            <HolismIcon
                icon={icon}
            />
        </IconButton>
    }
    return <MuiButton
        startIcon={
            progress || internalProgress
                ?
                <Progress />
                :
                <HolismIcon icon={icon} />
        }
        variant="outlined"
        disabled={disabled || progress || internalProgress}
        onClick={() => {
            if (onClick instanceof Function) {
                onClick({
                    error,
                    setProgress: setInternalProgress,
                    success,
                })
            }
        }}
        color={color}
        className={className}
        size={small && "small"}
    >
        {t(text)}
    </MuiButton>
}

export default Button
