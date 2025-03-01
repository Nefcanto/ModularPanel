import EntityTypes from "./EntityType/List"
import Modules from "./Module/List"

const ModulesRoutes = [
    {
        path: "/modules",
        component: Modules,
        superAdmin: true
    },
    {
        path: "/entityTypes",
        component: EntityTypes,
        superAdmin: true
    }
]

export default ModulesRoutes
