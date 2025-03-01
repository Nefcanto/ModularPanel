import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"

const RestaurantsMenu = [
    {
        title: "RestaurantsRestaurants",
        icon: RestaurantMenuIcon,
        children: [
            {
                title: "RestaurantsRestaurants",
                path: "/restaurants",
            },
            {
                title: "RestaurantsTypes",
                path: "/restaurantTypes"
            },
            {
                title: "PricingPriceLevels",
                path: "/priceLevels?entityType=restaurant"
            }
        ]
    }
]

export default RestaurantsMenu
