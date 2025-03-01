import CachedIcon from "@mui/icons-material/Cached"
import EditAttributesIcon from "@mui/icons-material/EditAttributes"
import { post } from "App"
import { ListAction } from "List"
import { QueryParametersListActions } from "Seo"
import { DefineTags } from "NewTaxonomy"
import { AssignEntityTypeSettings } from "Settings"
import { ManageComments } from "Social"

const SalonListActions = () => {

    const updateAllSalonTypesCsv = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/salonType/updateAllSalonTypesCsv").then(data => {
            setProgress(false)
            success("Applied")
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    return <>
        <ManageComments />
        <ListAction
            icon={EditAttributesIcon}
            notApplicableToEntities
            superAdmin
            title="AttributesAttributes"
            url="/entityAttributes?entityType=Salon"
        />
        <ListAction
            icon={CachedIcon}
            notApplicableToEntities
            onClick={updateAllSalonTypesCsv}
            superAdmin
            title="NewTaxonomyUpdateCsvs"
        />
        <QueryParametersListActions
            entityType="Salon"
            module="Salons"
            returnTo="/salons"
            superAdmin
        />
        <DefineTags />
        <AssignEntityTypeSettings />
    </>
}

export default SalonListActions
