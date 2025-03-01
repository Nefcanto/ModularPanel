import DownloadIcon from "@mui/icons-material/Download"
import UploadIcon from "@mui/icons-material/Upload"
import { FileIcon } from "Panel"
import {
    EntityAction,
    List,
} from "List"
import CreateForm from "./CreateForm"
import EditForm from "./EditForm"

const headers = <>
    <th></th>
    <th>InfraTitle</th>
</>

const row = entity => {
    return <>
        <td>
            <FileIcon
                extension={entity.extension.replace(".", "")}
            />
        </td>
        <td>
            <a href={entity.relatedItems?.fileUrl}>
                {entity.title}
            </a>
        </td>
    </>
}

const entityActions = entity => <>
    <EntityAction
        goTo={entity.relatedItems.fileUrl}
        icon={DownloadIcon}
        title="InfraDownload"
    />
</>

const Files = () => {
    return <List
        create={CreateForm}
        edit={EditForm}
        entityActions={entityActions}
        entityLoadingUrl={entity => `/file/getFile?id=${entity.id}`}
        entityType="File"
        hasDelete
        headers={headers}
        row={row}
        title="MediaFiles"
        upsertionIcon={UploadIcon}
        upsertionText="InfraUpload"
    />
}

export default Files
