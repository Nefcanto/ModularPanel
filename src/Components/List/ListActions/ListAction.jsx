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
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import {
    get,
    isDev,
    isSuperAdmin,
    post,
    t,
} from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import { useMessage } from "Hooks"
import Unify from "../../Unify"
import HolismIcon from "../../HolismIcon"

const ListAction = ({
    className,
    closeMenu,
    devOnly,
    dialog,
    download,
    get: getUrl,
    icon,
    isInsideMenu,
    menuItem,
    minCardinality,
    onClick,
    post: postUrl,
    superAdmin,
    text,
    title,
    url,
    ...rest
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
    const {
        hasData,
        reload,
        selectedEntities,
        setTreeExpanded,
        state,
        toggleState,
        treeExpanded,
    } = useContext(ListContext)
    const { success, error } = useMessage()
    const disabled =
        progress ||
        (minCardinality && !hasData) ||
        (minCardinality && minCardinality > selectedEntities.length)

    const listActionClass = `me-2 mt-2 lg:mt-0 ${!disabled && (className || "")}`

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
        else if (getUrl || postUrl) {
            const method = getUrl ? get : post
            setProgress(true)
            method(getUrl || postUrl, selectedEntities)
                .then(data => {
                    success("InfraDone")
                    setProgress(false)
                    reload()
                }, e => {
                    error(e)
                    setProgress(false)
                    reload()
                })
        }
        else if (onClick instanceof Function) {
            if (isInsideMenu && closeMenu instanceof Function) {
                closeMenu()
            }
            onClick({
                error,
                get,
                post,
                reloadList: reload,
                setProgress,
                setTreeExpanded,
                state,
                success,
                toggleState,
                treeExpanded,
            })
        }
        else if (dialog) {
            setOpen(!open)
        }
    }
    const iconButton = <IconButton
        className={listActionClass}
        disabled={disabled}
        onClick={handleClick}
    >
        {
            progress
                ?
                <CircularProgress
                    size={24}
                />
                :
                <HolismIcon icon={icon} />
        }
    </IconButton>

    const extraParams = {}
    if (url) {
        extraParams["link"] = url
    }

    return <DialogContext.Provider
        value={{
            open,
            setOpen,
        }}
    >
        <div>
            {
                menuItem
                    ?
                    <>
                        <MenuItem
                            className="group"
                            onClick={(e) => handleClick(e)}
                            {...extraParams}
                        >
                            <ListItemIcon>
                                <HolismIcon
                                    icon={icon}
                                />
                            </ListItemIcon>
                            <ListItemText>{t(title || "")}</ListItemText>
                        </MenuItem>
                    </>
                    :
                    <span className="listAction">
                        <Tooltip
                            disableInteractive
                            title={t(title || "")}
                        >
                            <span>
                                {iconButton}
                            </span>
                        </Tooltip>
                    </span>
            }
            {
                dialog && open &&
                <Unify
                    close={() => setOpen(false)}
                    component={dialog}
                    reload={reload}
                />
            }

        </div>
    </DialogContext.Provider>
}

export default ListAction
