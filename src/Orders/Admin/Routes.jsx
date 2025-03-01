import { OrderItems } from "OrdersCommon"
import Orders from "./Order/List"

const OrdersRoutes = [
    {
        path: "/orders/orders",
        component: Orders
    },
    {
        path: "/orders/orderItems",
        component: OrderItems
    }
]

export default OrdersRoutes
