import Conversions from "./Conversion/List"
import Dimensions from "./Dimension/List"
import Prefixes from "./Prefix/List"
import Units from "./Unit/List"

const UnitsRoutes = [
    {
        path: "/units/dimensions",
        component: Dimensions
    },
    {
        path: "/units/prefixes",
        component: Prefixes
    },
    {
        path: "/units/conversions",
        component: Conversions
    },
    {
        path: "/units/units",
        component: Units,
    },
]

export default UnitsRoutes
