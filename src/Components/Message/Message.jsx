import { useState } from "react"
import { useNavigate } from "react-router"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Collapse from "@mui/material/Collapse"
import Button from "@mui/material/Button"
import app from "App"

const Message = ({
    severity,
    title,
    text,
    close,
    actionText,
    action,
    className
}) => {

    const [isOpen, setIsOpen] = useState(true)
    const navigate = useNavigate()

    return <Collapse
        in={isOpen}
        className={className}
    >
        <Alert
            severity={severity}
            action={action && <Button
                onClick={() => {
                    if (typeof action === "string") {
                        navigate(action)
                    }
                }}
                className="text-slate-800"
            >{actionText}</Button>}
            onClose={close ? () => setIsOpen(false) : null}
            className=""
        >
            {title && <AlertTitle>{app.t(title)}</AlertTitle>}
            {app.t(text)}
        </Alert>
    </Collapse>
}

export default Message
