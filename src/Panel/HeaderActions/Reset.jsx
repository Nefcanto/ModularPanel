import RestartAltIcon from "@mui/icons-material/RestartAlt"
import HeaderAction from "./HeaderAction"
import * as Initializers from "ClientInitializers"

const Reset = () => {

    const reset = ({
        setProgress,
        success,
    }) => {

        setProgress(true)
        window.localStorage.clear()
        document.cookie
            .split(";")
            .forEach(c => {
                document.cookie = c
                    .replace(/^ +/, "")
                    .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
            })
        setTimeout(() => {
            setProgress(false)
            success("InfraDone")
        }, 2000)

        for (let initialization in Initializers) {
            let method = Initializers[initialization]
            if (method instanceof Function) {
                method()
            }
        }
    }

    return <HeaderAction
        icon={RestartAltIcon}
        onClick={reset}
        title="InfraReset"
    />
}

export default Reset
