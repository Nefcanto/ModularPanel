import { EntityStages } from "FlowsCommon"
import Flows from "./Flow/List"
import FlowsPart from "./Flows"
import ParameterProviderForm from "./ParameterProvider/Form"
import Stages from "./Stage/List"

const FlowsRoutes = [
    {
        path: "/part/flows",
        component: FlowsPart
    },
    {
        path: "/flows",
        component: Flows
    },
    {
        path: "/flowStages",
        component: Stages
    },
    {
        path: "/entityStages",
        component: EntityStages
    },
    {
        path: "/flows/graph",
        component: Stages
    },
    {
        path: "/flows/flow/code",
        component: ParameterProviderForm
    }
]

export default FlowsRoutes
