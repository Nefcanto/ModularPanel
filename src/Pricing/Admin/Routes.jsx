import Intervals from "./Interval/List"
import Levels from "./Level/List"
import PriceCandleList from "./Candle/List"

const PricingRoutes = [
    {
        path: "/priceCandles",
        component: PriceCandleList
    },
    {
        path: "/priceLevels",
        component: Levels
    },
    {
        path: "/intervals",
        component: Intervals
    }
]

export default PricingRoutes
