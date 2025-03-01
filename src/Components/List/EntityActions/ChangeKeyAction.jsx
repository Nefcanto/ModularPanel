import { useContext } from "react"
import KeyIcon from "@mui/icons-material/Key"
import {
    camelize,
    post,
    url,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import EntityAction from "./EntityAction"
import DialogForm from "../../Form/DialogForm"
import Key from "../../Form/Fields/Key"

const inputs = <>
    <Key showInEdit />
</>

const ChangeKeyAction = props => {

    const { entity } = useContext(EntityContext)
    const {
        changeKeyEntityType,
        reloadEntity,
    } = useContext(ListContext)

    const change = ({
        data,
        error,
        onCompleted,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(url({
            path: `/${changeKeyEntityType ? camelize(changeKeyEntityType) : camelize(entity.relatedItems.entityType)}/changeKey`,
            query: {
                key: data.Key,
                oldKey: entity.key,
            }
        })).then(data => {
            success("InfraDone")
            setProgress(false)
            onCompleted(data)
            reloadEntity(entity)
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    const dialog = <DialogForm
        entityType={entity.relatedItems.entityType}
        inputs={inputs}
        okAction={change}
        title="InfraChangeKey"
        warning="InfraChangeKeyWarning"
    />

    return <EntityAction
        dialog={dialog}
        icon={<KeyIcon style={{ color: "red" }} />}
        title="InfraChangeKey"
        {...props}
    />
}

export default ChangeKeyAction
