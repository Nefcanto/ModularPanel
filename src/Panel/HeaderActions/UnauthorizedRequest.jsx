import GppMaybeIcon from "@mui/icons-material/GppMaybe"
import { get } from "App"
import HeaderAction from "./HeaderAction"

const UnauthorizedRequest = () => {

    const simulate = ({
        error,
        setProgress,
    }) => {
        setProgress(true)
        get("/debug/simulateUnauthorizedAccess")
            .then(data => {
                setProgress(false)
            }, e => {
                error(e)
                setProgress(false)
            })
    }

    return <HeaderAction
        icon={GppMaybeIcon}
        onClick={simulate}
        title="InfraSimulateUnauthorizedRequest"
    />
}

export default UnauthorizedRequest
