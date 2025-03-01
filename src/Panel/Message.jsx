import {
    forwardRef,
    useContext,
} from "react"
import MuiAlert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Snackbar from "@mui/material/Snackbar"
import {
    getJsonHtml,
    t,
} from "App"
import { PanelContext } from "Contexts"
import { useMessage } from "Hooks"
import ErrorBoundary from "../Components/ErrorBoundary"

const Alert = forwardRef((props, ref) => {
    return <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        {...props}
    />
})

const Message = () => {

    const { hide } = useMessage()

    const {
        data,
        description,
        isMessageShown,
        message,
        severity,
    } = useContext(PanelContext)

    const hideMessage = (e, reason) => {
        if (reason === "clickaway") {
            return
        }
        hide()
    }

    return <ErrorBoundary>
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            autoHideDuration={6000}
            bodystyle={{ whiteSpace: "pre-line" }}
            ContentProps={{
                style: { whiteSpace: "pre-line" }
            }}
            onClose={hideMessage}
            open={isMessageShown}
        >
            <Alert
                onClose={hideMessage}
                severity={severity || "success"}
                sx={{ width: "100%" }}
            >
                {
                    message && description &&
                    <AlertTitle
                        className="font-bold whitespace-pre"
                    >
                        {typeof message === "string" && t(message)}
                    </AlertTitle>
                }
                {
                    message && description
                        ?
                        <div
                            className="mt-4"
                            dir={window.settings.IsDeveloping ? "ltr" : ""}
                        >
                            {data && <span>{getJsonHtml(data)}</span>}
                            {description}
                        </div>
                        :
                        t(message)
                }
            </Alert>
        </Snackbar>
    </ErrorBoundary>
}

export default Message
