import { useContext } from "react"
import ApartmentIcon from "@mui/icons-material/Apartment"
import {
    camelize,
    isSuperAdmin,
    post,
    url,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import EntityAction from "./EntityAction"
import DialogForm from "../../Form/DialogForm"
import Text from "../../Form/Fields/Text"

const inputs = <>
    <Text
        dir="ltr"
        placeholder="InfraTenant"
        property="Tenant"
    />
</>

const ChangeTenantAction = props => {

    const { entity } = useContext(EntityContext)
    const {
        changeTenantType,
        reload,
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
            path: `/${changeTenantType ? camelize(changeTenantType) : camelize(entity.relatedItems?.entityType || entity.type)}/changeTenant`,
            query: {
                id: entity.id,
                newTenant: data["Tenant"]
            }
        })).then(data => {
            success("InfraDone")
            setProgress(false)
            onCompleted(data)
            reload()
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    const dialog = <DialogForm
        entityType={entity.relatedItems?.entityType || entity.type}
        inputs={inputs}
        okAction={change}
        title="InfraChangeTenant"
        warning="InfraChangeTenantWarning"
    />

    return entity.tenant &&
        isSuperAdmin() &&
        <EntityAction
            dialog={dialog}
            icon={ApartmentIcon}
            title="InfraChangeTenant"
            {...props}
        />
}

export default ChangeTenantAction
