import PublishIcon from "@mui/icons-material/Publish"
import { post } from "App"
import HeaderAction from "./HeaderAction"

const ClearCache = () => {

    if (window.settings.DisableClearingCache) {
        return null
    }

    const clear = ({
        setProgress,
        success,
        error,
    }) => {
        setProgress(true)
        post("/cache/clear")
            .then(data => {
                success("InfraPublished")
                setProgress(false)
            }, e => {
                error(e)
                setProgress(false)
            })
    }

    return <HeaderAction
        onClick={clear}
        icon={PublishIcon}
        title="InfraPublish"
    />
}

export default ClearCache
