import CachedIcon from "@mui/icons-material/Cached"
import { post } from "App"
import {
    ClearModuleCache,
    ModuleAction,
    Page,
} from "Panel"

const FlowsPart = () => {

    const recalculate = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/flows/recalculate").then(data => {
            setProgress(false)
            success("InfraDone")
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    return <Page
        className="px-6 md:px-12 mx-auto dark:bg-stone-900 lg:w-full"
        title="FlowsFlows"
    >
        <ModuleAction
            onClick={recalculate}
            icon={CachedIcon}
            notApplicableToEntities
            superAdmin
            title="FlowsRecalculate"
        />
        <ClearModuleCache module="Flows" />
    </Page>
}

export default FlowsPart
