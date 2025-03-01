import CachedIcon from "@mui/icons-material/Cached"
import {
    isSuperAdmin,
    post,
} from "App"
import {
    ListAction,
    Tree,
    ValueWithTitle,
} from "List"
import CityDivisionForm from "./Form"

const listActions = <>
    <ListAction
        icon={CachedIcon}
        onClick={({
            error,
            reloadList,
            setProgress,
            success,
        }) => {
            setProgress(true)
            post("/cityDivision/updateAllTreeCsv")
                .then(data => {
                    setProgress(false)
                    success("InfraItemUpdatedSuccessfully")
                    reloadList()
                }, e => {
                    setProgress(false)
                    error(e)
                })
        }}
        title="GeoUpdateCSVs"
    />
</>

const show = entity => <ValueWithTitle
    title={entity.slug}
    value={entity.name}
/>

const CityDivisions = () => {

    return <Tree
        create={CityDivisionForm}
        entityType="CityDivision"
        hasDelete
        hasEdit
        listActions={isSuperAdmin() && listActions}
        show={show}
        title="GeoCityDivisions"
    />
}

export default CityDivisions
