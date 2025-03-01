import Locales from "./Locale/List"
import Translate from "./Translate"
import Translations from "./Translation/List"

const GlobalizationRoutes = [
    {
        path: "/globalization/locales",
        component: Locales
    },
    {
        path: "/globalization/translations",
        component: Translations
    },
    {
        path: "/globalization/translate",
        component: Translate
    }
]

export default GlobalizationRoutes
