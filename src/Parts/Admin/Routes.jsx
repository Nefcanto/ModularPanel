import Types from "./Type/List"
import Parts from "./Part/List"

const PartsRoutes = [
    {
        path: "/parts/parts",
        component: Parts,
        superAdmin: true
    },
    {
        path: "/parts/types",
        component: Types,
        superAdmin: true
    }
]

export default PartsRoutes
