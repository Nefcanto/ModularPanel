import {
    useContext,
    useState,
} from "react"
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep"
import {
    camelize,
    post,
} from "App"
import {
    ListContext,
    PanelContext,
} from "Contexts"
import ListAction from "./ListAction"
import MultiStepConfirmation from "../../MultiStepConfirmation"

const DeleteAllAction = () => {

    const [params, setParams] = useState({})
    const {
        camelizedEntityType,
        part,
        type,
    } = useContext(ListContext)
    const { startMultiStepConfirmation } = useContext(PanelContext)

    const deleteAll = () => {

        const {
            error,
            reloadList,
            setProgress,
            success,
        } = params
        const apiUrl = window.settings?.NodeApi
            ?
            `/${camelize(part)}/${camelize(type)}/deleteAll`
            :
            `/${camelizedEntityType}/deleteAll`

        setProgress(true)
        post(apiUrl).then(data => {
            success("InfraDone")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    const handleClick = params => {
        setParams(params)
        startMultiStepConfirmation(params)
    }

    return <>
        <MultiStepConfirmation
            onConfirmed={deleteAll}
        />
        <ListAction
            className="text-red-500 border-red-500 hover:bg-zinc-50 dark:hover:bg-red-500 dark:hover:text-white hover:border-red-400"
            icon={DeleteSweepIcon}
            onClick={handleClick}
            title="InfraDeleteAll"
        />
    </>
}

export default DeleteAllAction
