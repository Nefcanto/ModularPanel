import BackupIcon from "@mui/icons-material/Backup"
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn"
import {
    post,
    t,
} from "App"
import {
    ColorProperty,
    Image,
    List,
    ListAction,
} from "List"

const listActions = () => {

    const insertDefaults = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/blob/insertDefaults`).then(data => {
            setProgress(false)
            success("InfraDone")
            reloadList()
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    const generateFiles = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/blob/createFiles").then(data => {
            success("InfraDone")
            setProgress(false)
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <>

        <ListAction
            onClick={insertDefaults}
            icon={DataSaverOnIcon}
            notApplicableToEntities
            title="TenantsInsertDefaults"
        />
        <ListAction
            onClick={generateFiles}
            icon={BackupIcon}
            notApplicableToEntities
            title="ContentsGenerateFiles"
        />
    </>
}

const headers = <>
    <th>InfraKey</th>
    <th>TenantsContent</th>
</>

const row = entity => <>
    <td>{entity.key}</td>
    {
        entity.key === "colors" &&
        <ColorProperty
            colors={entity.relatedItems.textualContent}
            entityId={entity.id}
        />
    }
    {
        entity.key === "favicon" &&
        <Image
            uploadUrl="/blob/upload?key=favicon"
            url={`data:image/jpeg;base64,${entity.content}`}
        />
    }
    {
        (entity.key === "robots" || entity.key === "sitemap") &&
        <td>
            <span title={entity.relatedItems.textualContent?.cut(500)}>
                {t("InfraPreview")}
            </span>
        </td>
    }
</>

const Blobs = () => {
    return <List
        edit={({ entity }) => {
            if (entity.key === "favicon")
                return null
            else
                return `/tenants/blob/content?id=${entity.id}`
        }}
        entityType="Blob"
        headers={headers}
        listActions={listActions}
        row={row}
        subtitle="TenantsHereYouCanManageYourBlobs"
        title="TenantsBlobs"
    />
}

export default Blobs
