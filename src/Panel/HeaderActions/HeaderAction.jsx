import {
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Tooltip from "@mui/material/Tooltip"
import Fade from "@mui/material/Fade"
import app, { t } from "App"
import { DialogContext } from "Contexts"
import {
    useMessage,
    useWindowSize,
} from "Hooks"
import HolismIcon from "../../Components/HolismIcon"
import Progress from "../../Components/Progress"
import Unify from "../../Components/Unify"
import Dialog from "../../Components/Dialog/Dialog"
import PrimaryAction from "../../Components/Dialog/PrimaryAction"

const HeaderAction = ({
    closeMenu,
    component,
    icon,
    onClick,
    path,
    progress: externalProgress,
    show,
    title,
    url,
}) => {

    const navigate = useNavigate()

    const [showComponent, setShowComponent] = useState()
    const [progress, setProgress] = useState(false)
    const [totalProgress, setTotalProgress] = useState(externalProgress || progress)
    const [open, setOpen] = useState(false)
    const { success, error } = useMessage()
    const { width } = useWindowSize()
    const {
        lg,
        md,
        sm,
        xl,
        xs,
        xxl,
        zero,
    } = app.breakpoints

    useEffect(() => {
        setTotalProgress(progress || externalProgress)
    }, [progress, externalProgress])

    const handleClick = () => {
        if (width <= md && component) {
            if (closeMenu instanceof Function) {
                closeMenu()
            }
            setOpen(true)
        }
        if (url && app.isSomething(url)) {
            window.open(url, "_blank")
        }
        else if (path && app.isSomething(path)) {
            navigate(path)
        }
        else if (onClick && (typeof onClick === "function")) {
            onClick({
                error,
                setProgress,
                success,
            })
        }
        else if (component) {
            setShowComponent(!showComponent)
        }
        else {
            console.warn("No onClick is defined for HeaderAction")
        }
    }

    return <>
        <MenuItem
            className="group md:hidden"
            onClick={(e) => {
                e.stopPropagation()
                handleClick()
            }}
        >
            <ListItemIcon>
                {
                    totalProgress
                        ?
                        <div className="w-5 h-5 flex items-center justify-center -mb-2">
                            <Progress size={20} />
                        </div>
                        :
                        <HolismIcon
                            className="w-5 h-5"
                            icon={show || icon}
                        />
                }
            </ListItemIcon>
            <ListItemText>{t(title || "")}</ListItemText>
            {
                component &&
                <DialogContext.Provider
                    value={{
                        open,
                        setOpen,
                    }}
                >
                    <Dialog
                        actions={
                            <PrimaryAction
                                okClick={() => setOpen(false)}
                                totalProgress={totalProgress}
                            />
                        }
                        content={<ClickAwayListener onClickAway={() => setShowComponent(false)}>
                            <div>
                                <Fade in={showComponent}>
                                    <div>
                                        <Unify
                                            component={component || (() => <div></div>)}
                                            hide={() => setShowComponent(false)}
                                        />
                                    </div>
                                </Fade>
                            </div>
                        </ClickAwayListener>}
                        title=""
                    />
                </DialogContext.Provider>
            }
        </MenuItem>
        <div className={`headerAction relative select-none hidden md:block ${show ? "pt-1" : ""}`}>
            {
                totalProgress
                    ?
                    <div className="w-5 h-5 flex items-center justify-center -mb-3">
                        <Progress size={20} />
                    </div>
                    :
                    <Tooltip
                        disableInteractive
                        title={t(title || "")}
                    >
                        <div
                            className="text-gray-600 cursor-pointer hover:text-blue-500 transition-colors dark:text-slate-200 dark:hover:text-slate-300"
                            onClick={(e) => {
                                e.stopPropagation()
                                handleClick()
                            }}
                        >
                            {
                                show
                                    ?
                                    show
                                    :
                                    <HolismIcon
                                        className="w-5 h-5"
                                        icon={icon}
                                    />
                            }
                        </div>
                    </Tooltip>
            }
            {
                component &&
                <ClickAwayListener onClickAway={() => setShowComponent(false)}>
                    <div>
                        <Fade in={showComponent}>
                            <div
                                className={
                                    "absolute top-10 z-50 shadow-xl "
                                    + " end-0 "
                                }
                            >
                                <Unify
                                    component={component || (() => <div></div>)}
                                    hide={() => setShowComponent(false)}
                                />
                            </div>
                        </Fade>
                    </div>
                </ClickAwayListener>
            }
        </div>
    </>
}

export default HeaderAction
