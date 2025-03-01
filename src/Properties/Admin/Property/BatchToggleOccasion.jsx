import { useContext } from "react"
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark"
import { post } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const BatchToggleOccasion = () => {

    const {
        camelizedEntityType,
        selectedEntities,
    } = useContext(ListContext)

    const updateSelectedEntities = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/${camelizedEntityType}/batchToggleOccasion`, selectedEntities).then(data => {
            success("InfraDone")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <ListAction
        onClick={params => updateSelectedEntities(params)}
        icon={CollectionsBookmarkIcon}
        minCardinality={2}
        title="PropertiesBatchToggleOccasion"
    />
}

export default BatchToggleOccasion
