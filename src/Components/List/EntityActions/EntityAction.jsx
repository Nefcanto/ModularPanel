import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import CircularProgress from "@mui/material/CircularProgress"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import app, {
    get,
    isDev,
    isSuperAdmin,
    post,
    t,
    url,
} from "App"
import {
    DialogContext,
    EntityContext,
    ListContext,
} from "Contexts"
import { useMessage } from "Hooks"
import HolismIcon from "../../HolismIcon"
import Unify from "../../Unify"

const EntityAction = ({
    closeMenu,
    color,
    devOnly,
    dialog,
    doNotAddEntityToTheDialog,
    goTo,
    hoverOnly,
    icon,
    onClick,
    reload,
    superAdmin,
    title,
    ...rest
}) => {

    if (superAdmin && !isSuperAdmin()) {
        return null
    }

    if (devOnly && !isDev()) {
        return null
    }

    const navigate = useNavigate()
    const {
        error,
        success,
    } = useMessage()
    const {
        entityType,
        flat,
        isTable,
        isTree,
        menuForActions,
        reloadEntity,
        reloadList,
        setEntity,
        setEntityActionProgress,
    } = useContext(ListContext)
    const { entity } = useContext(EntityContext)
    const [open, setOpen] = useState(false)

    const iconStyles = "fill-gray-500 group-hover:fill-blue-500 dark:fill-white/70 dark:group-hover:fill-white/80"

    const extraParams = {}
    if (goTo) {
        extraParams["link"] = goTo
    }

    const callExternalOnClick = e => {
        if (onClick && typeof onClick === "function") {
            onClick({
                e,
                entity,
                error,
                get,
                post,
                reload,
                setEntity,
                setProgress,
                success,
                url,
            })
        }
    }

    const handleClick = e => {

        app.selectedItem = entity
        if (goTo) {
            app.selectedItem = entity
            let finalUrl = goTo
            if (typeof goTo === "function") {
                finalUrl = goTo(entity)
            }
            if (finalUrl.startsWith("http")) {
                window.open(finalUrl, "_blank")
            }
            else {
                navigate(finalUrl)
            }
        }
        else if (dialog) {
            setOpen(true)
            callExternalOnClick(e)
        }
        else if (onClick && typeof onClick === "function") {
            callExternalOnClick(e)
        }
        else {
            console.warn(`No action is assigned to entity action. Title is "${title}"`)
        }

        window.e = e
        e.stopPropagation()
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        e.nativeEvent.stopPropagation()
        e.nativeEvent.preventDefault()
    }

    const [progress, setProgress] = useState(false)

    useEffect(() => {
        if (setEntityActionProgress) {
            setEntityActionProgress(progress)
        }
    }, [progress])

    if (superAdmin && !isSuperAdmin()) {
        return <span className="hidden"></span>
    }

    const unifiedDialogExtraParams = {}
    if (doNotAddEntityToTheDialog) {
    }
    else {
        unifiedDialogExtraParams.entity = entity
    }

    const unifiedDialog = dialog && open && <Unify
        close={() => setOpen(false)}
        component={dialog}
        entityType={entityType}
        error={error}
        reload={reload}
        reloadEntity={reloadEntity}
        setEntity={setEntity}
        setOpen={setOpen}
        setProgress={setProgress}
        success={success}
        {...unifiedDialogExtraParams}
        {...rest}
    />

    const dialogContextExtraParams = {}
    if (isTree && !flat) {
        dialogContextExtraParams.parentId = entity.id
    }
    if (doNotAddEntityToTheDialog) {
    }
    else {
        dialogContextExtraParams.entity = entity
    }

    return <DialogContext.Provider
        value={{
            open,
            setOpen,
            ...dialogContextExtraParams
        }}
    >
        {
            (menuForActions && isTable) ?
                <>
                    <MenuItem
                        className="group"
                        onClick={e => {
                            handleClick(e)
                            if (closeMenu && typeof closeMenu === "function") {
                                // closeMenu()
                            }
                        }}
                        {...extraParams}
                    >
                        <ListItemIcon>
                            <HolismIcon
                                className={color || iconStyles}
                                icon={icon}
                            />
                        </ListItemIcon>
                        <ListItemText>{t(title || "")}</ListItemText>
                    </MenuItem>
                    {unifiedDialog}
                </>
                :
                <span
                    className="entityAction flex items-center justify-center"
                    {...extraParams}
                >
                    {
                        (progress || progress === true)
                            ?
                            <CircularProgress
                                className="m-2"
                                size={24}
                            />
                            :
                            <Tooltip
                                disableInteractive
                                title={t(title || "")}
                            >
                                <IconButton
                                    className="group"
                                    onClick={handleClick}
                                >
                                    {
                                        <HolismIcon
                                            className={color || iconStyles}
                                            icon={icon}
                                        />
                                    }
                                </IconButton>
                            </Tooltip>
                    }
                    {unifiedDialog}
                </span >
        }
    </DialogContext.Provider>
}

export default EntityAction
