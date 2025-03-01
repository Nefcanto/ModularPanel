import { useContext } from "react"
import ShareIcon from "@mui/icons-material/Share"
import WarningIcon from "@mui/icons-material/Warning"
import {
    camelize,
    isSuperAdmin,
    post,
    t,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import Dialog from "../../Dialog/Dialog"
import EntityAction from "./EntityAction"
import HolismIcon from "../../HolismIcon"
import OkCancel from "../../Dialog/OkCancel"

const ShareBetweenTenants = () => {

    const { reload } = useContext(ListContext)

    const { entity } = useContext(EntityContext)

    const shareEntity = ({
        error,
        setOpen,
        setProgress,
        success,
    }) => {
        setOpen(false)
        setProgress(true)
        const url = `/${camelize(entity.relatedItems.entityType)}/shareBetweenTenants?id=${entity.id}`
        post(url).then(data => {
            setProgress(false)
            success("InfraDone")
            reload()
        }, e => {
            setProgress(false)
            error(e)
            setOpen(false)
        })
    }

    const dialog = <Dialog
        actions={props => <OkCancel
            cancelClick={() => props.setOpen(false)}
            cancelText="InfraNo"
            okClick={() => shareEntity(props)}
            okText="InfraYes"
        />}
        content={<div className="flex justify-center items-center flex-col sm:flex-row">
            <HolismIcon
                className="text-red-400 text-5xl me-4"
                icon={WarningIcon}
            />
            <span>
                {t("InfraSharingConfirmation")}
            </span>
        </div>}
        tiny
    />
    return entity.tenant &&
        isSuperAdmin() &&
        entity.tenant !== "shared" &&
        <EntityAction
            dialog={dialog}
            icon={ShareIcon}
            title="InfraSharingBetweenTenants"
        />
}

export default ShareBetweenTenants
