import UpdateIcon from "@mui/icons-material/Update"
import { post } from "App"
import { EntityAction } from "List"
import { ManageTags } from "NewTaxonomy"
import { ManageImages } from "Media"

const EntityActions = entity => {

    const updateModificationDate = ({
        error,
        reload,
        setProgress,
        success,
    }) => {

        setProgress(true)
        post(`/property/updateModificationDate/${entity.id}`)
            .then(data => {
                setProgress(false)
                success("PropertiesPropertyUpdated")
                reload()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <EntityAction
            icon={UpdateIcon}
            onClick={updateModificationDate}
            title="PropertiesUpdateModificationDate"
        />
        <ManageTags />
        <ManageImages />
    </>
}

export default EntityActions
