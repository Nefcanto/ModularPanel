import { useContext } from "react"
import TrendingDownIcon from "@mui/icons-material/TrendingDown"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"

const ManageReduction = () => {

    const { entity } = useContext(EntityContext || {})

    return <EntityAction
        goTo={`/reductions?entityType=${entity?.relatedItems?.entityType}&entityGuid=${entity.guid}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
        icon={TrendingDownIcon}
        title="SalesManageReductions"
    />
}

export default ManageReduction
