import RestaurantImages from "./Restaurant/Images"
import Restaurants from "./Restaurant/List"
import Types from "./Type/List"

const RestaurantsRoutes = [
    {
        path: "/restaurantTypes",
        component: Types
    },
    {
        path: "/restaurants",
        component: Restaurants
    },
    {
        path: "/restaurant/images",
        component: RestaurantImages
    }
]

export default RestaurantsRoutes
