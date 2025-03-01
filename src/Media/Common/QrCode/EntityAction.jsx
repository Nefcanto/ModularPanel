import { useContext } from "react"
import QrCode2Icon from "@mui/icons-material/QrCode2"
import CropFreeIcon from "@mui/icons-material/CropFree"
import {
    downloadExternal,
    localizedSiteUrl,
    openDownloadDialog,
    post,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import { EntityAction } from "List"

const EntityQrCode = ({ path }) => {

    if (!path || path == "") {
        throw "Please provide a path for your QR code"
    }
    if (path[0] !== "/") {
        throw "QR code path is not valid, The path must start with a \/"
    }

    const { entity } = useContext(EntityContext)
    const { reloadEntity } = useContext(ListContext)

    const generateQrCode = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        const qrCodeUrl = `${localizedSiteUrl()}${path}`
        post(`/qrCode/generate?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}&url=${qrCodeUrl}`)
            .then(data => {
                setProgress(false)
                success("MediaQrCodeGenerated")
                reloadEntity(entity)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return entity.relatedItems.qrCodeUrl
        ?
        <EntityAction
            goTo={entity.relatedItems.qrCodeUrl}
            icon={QrCode2Icon}
            title={"MediaQrCodeDownload"}
        />
        :
        <EntityAction
            icon={CropFreeIcon}
            onClick={generateQrCode}
            title={"MediaGenerateQrCode"}
        />
}

export default EntityQrCode
