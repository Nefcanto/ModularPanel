import SalonAttributeForm from "./SalonAttribute/Form"
import SalonImages from "./Salon/Images"
import Salons from "./Salon/List"
import Types from "./Type/List"

const SalonsRoutes = [
    {
        path: "/salons",
        component: Salons
    },
    {
        path: "/salon/types",
        component: Types
    },
    {
        path: "/salon/images",
        component: SalonImages
    },
    {
        path: "/salon/attribute",
        component: SalonAttributeForm
    },
]

export default SalonsRoutes
