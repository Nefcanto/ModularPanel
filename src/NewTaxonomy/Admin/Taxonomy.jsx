import CachedIcon from "@mui/icons-material/Cached"
import { post } from "App"
import {
    ClearModuleCache,
    ModuleAction,
    Page,
} from "Panel"

const Taxonomy = () => {

    const updateCsvs = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/taxonomy/updateCsvs").then(data => {
            setProgress(false)
            success("InfraDone")
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    return <Page
        className="px-6 md:px-12 mx-auto dark:bg-stone-900 lg:w-full"
        title="NewTaxonomyTaxonomy"
    >
        <ModuleAction
            onClick={updateCsvs}
            icon={CachedIcon}
            notApplicableToEntities
            superAdmin
            title="NewTaxonomyUpdateCsvs"
        />
        <ClearModuleCache module="NewTaxonomy" />
    </Page>
}

export default Taxonomy
