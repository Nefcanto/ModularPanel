import {
    AgentAggregateChartPage,
    PropertyAttributeForm,
    PropertyFileCompositionForm,
} from "PropertiesCommon"
import AgentFiles from "./AgentFile/List"
import Agents from "./Agent/List"
import DealTypes from "./DealType/List"
import Properties from "./Property/List"
import PropertyFiles from "./File/List"
import PropertyCompositionForm from "./Property/CompositionForm"
import PropertyTypes from "./PropertyType/List"
import RangeManagerAgents from "./RangeManagerAgent/List"
import RangeManagerAgentsChartPage from "./RangeManager/AgentsChartPage"
import RangeManagerAggregateChartPage from "./RangeManager/AggregateChartPage"
import RangeManagers from "./RangeManager/List"

const PropertiesRoutes = [
    {
        path: "/properties/properties",
        component: Properties
    },
    {
        path: "/properties/property/create",
        component: PropertyCompositionForm
    },
    {
        path: "/properties/property/edit",
        component: PropertyCompositionForm
    },
    {
        path: "/properties/propertyFiles",
        component: PropertyFiles
    },
    {
        path: "/properties/propertyFile/create",
        component: PropertyFileCompositionForm
    },
    {
        path: "/properties/propertyFile/edit",
        component: PropertyFileCompositionForm
    },
    {
        path: "/properties/agents",
        component: Agents
    },
    {
        path: "/properties/agentFiles",
        component: AgentFiles
    },
    {
        path: "/properties/dealTypes",
        component: DealTypes,
        superAdmin: true
    },
    {
        path: "/properties/propertyTypes",
        component: PropertyTypes,
        superAdmin: true
    },
    {
        path: "/properties/property/attributes",
        component: PropertyAttributeForm
    },
    {
        path: "/properties/rangeManagers",
        component: RangeManagers
    },
    {
        path: "/properties/rangeManagerAgents",
        component: RangeManagerAgents
    },
    {
        path: "/properties/property/agentAggregateChart",
        component: AgentAggregateChartPage
    },
    {
        path: "/properties/property/rangeManagerAggregateChart",
        component: RangeManagerAggregateChartPage
    },
    {
        path: "/properties/rangeManagerAgents/chart",
        component: RangeManagerAgentsChartPage
    }
]

export default PropertiesRoutes
