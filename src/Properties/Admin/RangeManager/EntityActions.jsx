import Diversity3Icon from "@mui/icons-material/Diversity3"
import QueryStatsIcon from "@mui/icons-material/QueryStats"
import { EntityAction } from "List"
import { EditPerson } from "Contacts"
import { ManageAggregateChart } from "PropertiesCommon"

const EntityActions = entity => <>
    <EditPerson phones />
    <EntityAction
        goTo={`/properties/rangeManagerAgents?rangeManagerId=${entity.id}&pp=properties&pt=rangeManager&pid=${entity.id}`}
        icon={Diversity3Icon}
        title="PropertiesRangeManagerAgents"
    />
    <ManageAggregateChart />
    <EntityAction
        goTo={`/properties/rangeManagerAgents/chart?rangeManagerId=${entity.id}&pp=properties&pt=rangeManager&pid=${entity.id}`}
        icon={QueryStatsIcon}
        title="PropertiesAgentsChart"
    />
</>

export default EntityActions
