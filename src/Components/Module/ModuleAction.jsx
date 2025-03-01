import {
    useContext,
    useState,
} from "react"
import {
    useNavigate,
    useSearchParams,
} from "react-router"
import Tooltip from "@mui/material/Tooltip"
import CircularProgress from "@mui/material/CircularProgress"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import {
    isDev,
    isSuperAdmin,
    t,
} from "App"
import { DialogContext } from "Contexts"
import { useMessage } from "Hooks"
import Unify from "../Unify"
import HolismIcon from "../HolismIcon"

const ModuleAction = ({
    className,
    onClick,
    devOnly,
    dialog,
    download,
    icon,
    superAdmin,
    text,
    title,
    url,
}) => {

    if (superAdmin && !isSuperAdmin()) {
        return null
    }

    if (devOnly && !isDev()) {
        return null
    }

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [progress, setProgress] = useState(false)
    const [open, setOpen] = useState(false)
    const { success, error } = useMessage()
    const disabled = progress

    const moduleActionClass = `me-2 mt-2 lg:mt-0 ${!disabled && (className || "")}`

    const handleClick = e => {
        e.stopPropagation()
        if (url) {
            if (typeof url === "string") {
                navigate(url)
            }
            else if (url instanceof Function) {
                navigate(url(searchParams))
            }
        }
        else if (onClick instanceof Function) {
            onClick({
                error,
                setProgress,
                success,
            })
        }
        else if (dialog) {
            setOpen(!open)
        }
    }
    const iconButton = <IconButton
        disabled={disabled}
        onClick={handleClick}
        className={moduleActionClass}
    >
        {
            progress
                ?
                <CircularProgress
                    size={20}
                />
                :
                <HolismIcon icon={icon} />
        }
    </IconButton>
    const button = <Button
        variant="outlined"
        disabled={disabled}
        startIcon={
            progress
                ?
                <CircularProgress
                    size={20}
                />
                :
                <HolismIcon icon={icon} />

        }
        onClick={handleClick}
        className={moduleActionClass}
    >
        {t(text || title)}
    </Button>

    return <DialogContext.Provider
        value={{
            open,
            setOpen,
        }}
    >
        <div>
            <span className="moduleAction">
                {
                    title
                        ?
                        <Tooltip
                            disableInteractive
                            title={t(title || "")}
                        >
                            <span>
                                {button}
                            </span>
                        </Tooltip>
                        :
                        button
                }

            </span>
            {
                dialog &&
                <Unify
                    component={dialog}
                    close={() => setOpen(false)}
                />
            }

        </div>
    </DialogContext.Provider>
}

export default ModuleAction
