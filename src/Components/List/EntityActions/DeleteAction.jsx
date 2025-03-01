import { useContext } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
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
import EntityAction from "./EntityAction"
import HolismIcon from "../../HolismIcon"
import Dialog from "../../../Components/Dialog/Dialog"
import OkCancel from "../../../Components/Dialog/OkCancel"

const DeleteAction = () => {

    const {
        deleteUrl,
        deletionEntityType,
        deletionIdChooser,
        entityType,
        part,
        reload,
        type,
    } = useContext(ListContext)
    const { entity } = useContext(EntityContext)

    const deleteEntity = ({
        error,
        setOpen,
        setProgress,
        success,
    }) => {
        setOpen(false)
        setProgress(true)
        let url = ""
        if (deleteUrl) {
            if (deleteUrl instanceof Function) {

                url = deleteUrl({ entity })
            }
            if (deleteUrl instanceof String) {
                url = deleteUrl
            }

        } else {
            if (window.settings?.NodeApi) {
                url = `${camelize(part)}/${camelize(type)}/delete?id=${deletionIdChooser ? deletionIdChooser(entity) : entity.id}`
            }
            else {
                url = `${camelize(deletionEntityType || entityType)}/delete/${deletionIdChooser ? deletionIdChooser(entity) : entity.id}`
            }
        }

        post(url).then(data => {
            success(t("InfraDeletedSuccessfully"))
            setProgress(false)
            reload()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    const content = <div className="flex justify-center items-center flex-col sm:flex-row">
        <HolismIcon
            className="text-red-400 text-5xl me-4"
            icon={WarningIcon}
        />
        <span>
            {t("InfraAreYouSureYouWantToDeleteThisEntity")}
        </span>
        {/* todo: Show some information form the selected entity, to enhance UX */}
    </div>

    const actions = props => <OkCancel
        cancelClick={() => props.setOpen(false)}
        cancelText="InfraNo"
        okClick={() => deleteEntity(props)}
        okText="InfraYes"
    />

    const dialog = <Dialog
        actions={actions}
        content={content}
        tiny
        title={t("InfraConfirmation")}
    />

    return entity.isVital && !isSuperAdmin()
        ?
        null
        :
        <EntityAction
            dialog={dialog}
            icon={<DeleteIcon className="text-red-400 dark:text-red-300" />}
            title={t("InfraDelete")}
        />
}

export default DeleteAction
