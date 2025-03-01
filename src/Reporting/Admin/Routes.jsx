import Reports from "./Report/List"
import ViewReport from "./Report/View"

const ReportingRoutes = [
    {
        path: "/reporting/reports",
        component: Reports
    },
    {
        path: "/reporting/report/view",
        component: ViewReport
    }
]

export default ReportingRoutes
