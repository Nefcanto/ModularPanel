import Button from "@mui/material/Button"
import { t } from "App"

const PrimaryAction = ({
    onClick,
    disabled,
    text,
}) => {

    return <Button
        className={disabled && "bg-green-200 text-gray-900 border-gray-400"}
        onClick={onClick}
        disabled={disabled || false}
    >
        {t(text || "InfraOk")}
    </Button>
}

export default PrimaryAction
