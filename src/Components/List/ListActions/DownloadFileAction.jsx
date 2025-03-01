import DownloadIcon from "@mui/icons-material/Download"
import {
    download,
    openDownloadDialog,
} from "App"
import ListAction from "./ListAction"

const DownloadFileAction = ({
    fileName,
    fromUrl,
    title,
}) => {

    const downloadFile = ({
        data,
        error,
        setProgress,
    }) => {

        setProgress(true)
        download(fromUrl, data).then(data => {
            setProgress(false)
            openDownloadDialog(data)
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <>
        <ListAction
            title={title || "InfraDownload"}
            icon={DownloadIcon}
            onClick={downloadFile}
            notApplicableToEntities
        />
    </>
}

export default DownloadFileAction
