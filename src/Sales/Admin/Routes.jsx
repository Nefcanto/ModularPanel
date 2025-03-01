import Packages from "./Package/List"
import ReductionTypes from "./ReductionType/List"
import AdditionTypes from "./AdditionType/List"
import Reductions from "./Reduction/List"
import Additions from "./Addition/List"

const SalesRoutes = [
    {
        path: "/packages",
        component: Packages
    },
    {
        path: "/reductionTypes",
        component: ReductionTypes
    },
    {
        path: "/additionTypes",
        component: AdditionTypes
    },
    {
        path: "/reductions",
        component: Reductions
    },
    {
        path: "/additions",
        component: Additions
    }
]

export default SalesRoutes
