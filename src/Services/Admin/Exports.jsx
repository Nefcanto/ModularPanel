import Services from "./Service/List"
import { AttributeManaging } from "ServicesCommon"

const ServicesRoutes = [
    {
        path: "/services",
        component: Services
    },
    {
        path: "/attributeManaging",
        component: AttributeManaging
    }
]

export { ServicesRoutes }
export { Services }
