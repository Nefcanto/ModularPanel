import {
    EntityAttributePageForm,
    EntityAttributes,
    Variants,
} from "AttributesCommon"
import Attributes from "./Attribute/List"
import Options from "./Option/List"

const AttributesRoutes = [
    {
        path: "/attributes/attributes",
        component: Attributes
    },
    {
        path: "/attributes/attributeOptions",
        component: Options
    },
    {
        path: "/attributes/entityAttributes",
        component: EntityAttributes
    },
    {
        path: "/attributes/entityAttributes/upsert",
        component: EntityAttributePageForm
    },
    {
        path: "/attributes/variants",
        component: Variants
    }
]

export default AttributesRoutes
