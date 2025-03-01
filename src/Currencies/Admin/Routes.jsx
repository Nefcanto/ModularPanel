import Currencies from "./Currency/List"
import LocaleCurrencies from "./Locale/List"

const CurrenciesRoutes = [
    {
        path: "/currencies",
        component: Currencies
    },
    {
        path: "/localeCurrencies",
        component: LocaleCurrencies
    }
]

export default CurrenciesRoutes
