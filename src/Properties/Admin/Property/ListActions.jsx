import CalculateIcon from "@mui/icons-material/Calculate"
import { post } from "App"
import { ListAction } from "List"
import { DefineAttributes } from "Attributes"
import { QueryParametersListActions } from "Seo"
import { DefineTags } from "NewTaxonomy"
import { AssignEntityTypeSettings } from "Settings"
import BatchToggleFeatured from "./BatchToggleFeatured"
import BatchToggleOccasion from "./BatchToggleOccasion"
import BatchUpdateModificationDate from "./BatchUpdateModificationDate"

const PropertyListActions = () => <>
    <BatchUpdateModificationDate />
    <BatchToggleOccasion />
    <BatchToggleFeatured />
    <AssignEntityTypeSettings />
    <DefineAttributes />
    <DefineTags />
    <QueryParametersListActions
        entityType="Property"
        module="Properties"
        returnTo="/properties/properties"
    />
    <ListAction
        icon={CalculateIcon}
        notApplicableToEntities
        onClick={({
            error,
            setProgress,
            success,
        }) => {

            setProgress(true)
            post("/property/calculateAveragePrices").then(data => {
                setProgress(false)
                success("PropertiesSuccessCalculateAveragePrices")
            }, e => {
                setProgress(false)
                error(e)
            }
            )
        }}
        superAdmin
        title="PropertiesCalculateAveragePrices"
    />
</>

export default PropertyListActions
