import CommissionTotals from "./CommissionTotal/List"
import EntityCommissions from "./EntityCommission/List"
import PersonCommissionDefaults from "./PersonCommissionDefault/List"
import Reasons from "./Reason/List"

const CommissionsRoutes = [
    {
        path: "/entityCommissions",
        component: EntityCommissions
    },
    {
        path: "/personCommissionDefaults",
        component: PersonCommissionDefaults,
    },
    {
        path: "/commissionTotals",
        component: CommissionTotals
    },
    {
        path:"/reasons",
        component:Reasons
    }
]

export default CommissionsRoutes
