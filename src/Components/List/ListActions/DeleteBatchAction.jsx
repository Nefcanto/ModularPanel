import { useContext } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import { post } from "App"
import { ListContext } from "Contexts"
import ListAction from "./ListAction"

const DeleteBatchAction = () => {

    const {
        camelizedEntityType,
        selectedEntities,
    } = useContext(ListContext)

    const deleteSelectedEntities = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/${camelizedEntityType}/deleteEntities`, selectedEntities).then(data => {
            success("InfraEntitiesAreDeletedSuccessfully")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <ListAction
        className="text-[#EF4444] border-[#EF4444] hover:bg-red-100 hover:border-red-400 hover:bg-black/50"
        onClick={(params) => deleteSelectedEntities(params)}
        icon={DeleteIcon}
        minCardinality={2}
        title="InfraDeleteSelected"
    />
}

export default DeleteBatchAction
