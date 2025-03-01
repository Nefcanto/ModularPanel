import { useContext } from "react"
import ListAltIcon from "@mui/icons-material/ListAlt"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageField = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={url({
            path: "/forms/fields",
            query: {
                form: entity.key
            },
            parent: entity
        })}
        icon={ListAltIcon}
        title="FormsManageFields"
    />

}

export default ManageField
