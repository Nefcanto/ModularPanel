import { useContext } from "react"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"

const ManageAddition = () => {

    const { entity } = useContext(EntityContext || {})

    return <EntityAction
        goTo={`/additions?entityType=${entity?.relatedItems?.entityType}&entityGuid=${entity.guid}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
        icon={TrendingUpIcon}
        title="SalesManageAdditions"
    />
}

export default ManageAddition
