import { useContext } from "react"
import UpdateIcon from "@mui/icons-material/Update"
import { post } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const BatchUpdateModificationDate = () => {

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
        post(`/${camelizedEntityType}/batchUpdateModificationDate`, selectedEntities).then(data => {
            success("PropertiesPropertiesAreUpdatedSuccessfully")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <ListAction
        onClick={params => updateSelectedEntities(params)}
        icon={UpdateIcon}
        minCardinality={2}
        title="PropertiesBatchUpdateModificationDate"
    />
}

export default BatchUpdateModificationDate
