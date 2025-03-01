import {
    useContext,
    useState,
} from "react"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import { upload } from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import ListAction from "./ListAction"
import DialogForm from "../../Form/DialogForm"
import File from "../../Form/Fields/File"

const UploadFileAction = ({
    actionName,
    submitTo,
    title,
}) => {

    const [params, setParams] = useState({})
    const [open, setOpen] = useState(false)
    const { camelizedEntityType } = useContext(ListContext)

    const uploadFile = ({
        data,
        error,
        setProgress,
        success,
    }) => {

        const { reloadList } = params

        setProgress(true)
        let url = ""
        if (actionName) {
            url = `/${camelizedEntityType}/${actionName}`
        } else if (submitTo) {
            url = submitTo
        }
        upload(url, data).then(data => {
            success("InfraUploadWasSuccessful")
            setProgress(false)
            reloadList()
            setOpen(false)
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    const dialog = <DialogContext.Provider
        value={{
            open,
            setOpen,
        }}
    >
        <DialogForm
            title="InfraFileUpload"
            okAction={uploadFile}
            inputs={<File />}
            open={open}
        />
    </DialogContext.Provider>

    return <>
        {open && dialog}
        <ListAction
            title={title || "InfraUpload"}
            icon={FileUploadIcon}
            onClick={params => {
                setParams(params)
                setOpen(true)
            }}
            notApplicableToEntities
        />
    </>
}

export default UploadFileAction
