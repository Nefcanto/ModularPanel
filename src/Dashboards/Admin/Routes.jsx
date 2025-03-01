import Dashboards from "./Dashboard/List"
import Design from "./Dashboard/Design"

const DashboardsRoutes = [
    {
        path: "/dashboards/dashboards",
        component: Dashboards
    },
    {
        path: "/dashboards/design",
        component: Design
    }
]

export default DashboardsRoutes
