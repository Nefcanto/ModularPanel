import { useContext } from "react"
import BarChartIcon from "@mui/icons-material/BarChart"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageAggregateChart = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="AggregatesManageEntityAggregateChart"
        icon={BarChartIcon}
        goTo={`/property/${entity?.relatedItems?.entityType}AggregateChart?entityType=${entity?.relatedItems?.entityType}&firstDimension=${entity?.guid}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
    />

}

export default ManageAggregateChart
