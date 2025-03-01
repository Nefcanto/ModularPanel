import { useContext } from "react"
import BarChartIcon from "@mui/icons-material/BarChart"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageEntityAggregateChart = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={`/entityAggregate?entityType=${entity?.relatedItems?.entityType}&entityGuid=${entity?.guid}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
        icon={BarChartIcon}
        title="AggregatesManageEntityAggregateChart"
    />

}

export default ManageEntityAggregateChart
