import PublishIcon from "@mui/icons-material/Publish"
import ModuleAction from "./ModuleAction"

const ClearCache = ({ module }) => {

    const clearModuleCache = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/cache/clearModule").then(data => {
            setProgress(false)
            success("InfraDone")
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    return <ModuleAction
        title="InfraClearCache"
        icon={PublishIcon}
        onClick={clearModuleCache}
        notApplicableToEntities
        superAdmin
    />
}

export default ClearCache
