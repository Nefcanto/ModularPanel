import GridOnIcon from "@mui/icons-material/GridOn"
import { useContext } from "react"
import {
    appendQueryToApiUrl,
    camelize,
    download,
    openDownloadDialog,
} from "App"
import { ListContext } from "Contexts"
import ListAction from "./ListAction"

const ExportToSpreadsheetAction = () => {

    const {
        camelizedEntityType,
        camelizedModule,
        part,
        pascalizedEntityType,
        pascalizedModule,
        type,
    } = useContext(ListContext)

    const exportToSpreadsheet = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        const url = window.settings?.NodeApi
            ?
            appendQueryToApiUrl(`/${camelize(part)}/${camelize(type)}/exportToSpreadsheet`)
            :
            appendQueryToApiUrl(`/${camelizedEntityType}/export`)
        download(url)
            .then(data => {
                success("InfraDone")
                setProgress(false)
                openDownloadDialog(data)
            }, e => {
                error(e)
                setProgress(false)
            })
    }

    return <ListAction
        icon={GridOnIcon}
        onClick={exportToSpreadsheet}
        title="InfraExportToSpreadsheet"
    />
}

export default ExportToSpreadsheetAction
