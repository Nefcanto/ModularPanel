import Warehouses from "./Warehouse/List"
import Suppliers from "./Supplier/List"
import Stocks from "./Stock/List"

const InventoryRoutes = [
    {
        path: "/inventory/warehouses",
        component: Warehouses
    },
    {
        path: "/suppliers",
        component: Suppliers
    },
    {
        path: "/inventory/stocks",
        component: Stocks
    }
]

export default InventoryRoutes
