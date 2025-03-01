import { useContext } from "react"
import MuiDialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { t } from "App"
import { DialogContext } from "Contexts"
import PrimaryAction from "./PrimaryAction"

const Dialog = ({
    actions,
    content,
    large,
    onClosing,
    onClosed,
    onOpened,
    tiny,
    title,
    ...rest
}) => {

    const dialogContext = useContext(DialogContext)
    const {
        open,
        setOpen,
    } = dialogContext || {}

    return open && <MuiDialog
        open={open}
        onClose={() => {
            let shouldBeClosed = true
            if (onClosing instanceof Function) {
                const result = onClosing()
                if (!result) {
                    shouldBeClosed = false
                }
            }
            if (shouldBeClosed) {
                setOpen(false)
                onClosed instanceof Function && onClosed(false)
            }
        }}
        PaperProps={{
            className: "dark:bg-zinc-950 localized-number"
        }}
        id="dialog"
        fullWidth
        maxWidth={large ? "md" : (tiny ? "xs" : "sm")}
        TransitionProps={{
            onEntered: onOpened
        }}
    >
        <DialogTitle
            id="dialogTitle"
            className="dark:text-gray-200"
        >
            {
                typeof title === "string"
                    ?
                    t(title)
                    :
                    title
            }
        </DialogTitle>
        <DialogContent className="transition-all">
            {
                typeof content === "string"
                    ?
                    <DialogContentText id="dialogContent">
                        {content}
                    </DialogContentText>
                    :
                    content
            }
        </DialogContent>
        <DialogActions>
            {
                actions
                    ?
                    actions instanceof Function
                        ?
                        actions(rest)
                        :
                        actions
                    :
                    <PrimaryAction
                        text="InfraOk"
                        onClick={() => {
                            setOpen(false)
                            onClosed instanceof Function && onClosed()
                        }}
                    />
            }
        </DialogActions>
    </MuiDialog>
}

export default Dialog
