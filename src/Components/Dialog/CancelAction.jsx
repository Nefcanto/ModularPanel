import Button from "@mui/material/Button"
import app from "App"

const CancelAction = ({
    onClick,
    text,
}) => {
    return <Button
        tabIndex={-1}
        className="text-gray-900 border-gray-400 dark:text-red-400"
        onClick={onClick}
    >
        {app.t(text || "InfraCancel")}
    </Button>
}

export default CancelAction
