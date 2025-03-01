import Types from "./Type/List"
import Discounts from "./Discount/List"

const DiscountsRoutes = [
    {
        path: "/discountTypes",
        component: Types
    },
    {
        path: "/discounts",
        component: Discounts
    }
]

export default DiscountsRoutes
