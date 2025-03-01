import { useContext } from "react"
import Diversity3Icon from "@mui/icons-material/Diversity3"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageAgentFiles = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="PropertiesManageAgentFiles"
        icon={Diversity3Icon}
        goTo={`/properties/agentFiles?propertyId=${entity.id}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
    />
}

export default ManageAgentFiles
