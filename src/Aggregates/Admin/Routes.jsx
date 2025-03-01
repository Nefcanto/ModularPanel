import { EntityAggregateChartPage } from "AggregatesCommon"
import Codes from "./Code/List"
import Cubes from "./Cube/List"
import Parameters from "./Parameter/List"
import Queries from "./Query/List"
import Structure from "./Structure/List"

const AggregatesRoutes = [
    {
        path: "/aggregates/queries",
        component: Queries
    },
    {
        path: "/aggregates/codes",
        component: Codes
    },
    {
        path: "/aggregates/structures",
        component: Structure
    },
    {
        path: "/aggregates/parameters",
        component: Parameters
    },
    {
        path: "/aggregates/cubes",
        component: Cubes
    },
    {
        path: "/entityAggregate",
        component: EntityAggregateChartPage
    }
]

export default AggregatesRoutes
