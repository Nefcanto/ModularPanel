import MenuItems from "./MenuItem/Tree"
import MenuItemsOrder from "./MenuItem/Order"

const NavigationRoutes = [
    {
        path: "/menuItems",
        component: MenuItems
    },
    {
        path: "/orderMenuItems",
        component: MenuItemsOrder
    }
]

export default NavigationRoutes
