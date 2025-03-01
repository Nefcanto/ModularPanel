import AdministrativeDivisions from "./AdministrativeDivision/List"
import Cities from "./City/List"
import CityDivisions from "./CityDivision/Tree"
import Countries from "./Country/List"

const GeoRoutes = [
    {
        path: "/geo/countries",
        component: Countries
    },
    {
        path: "/geo/administrativeDivisions",
        component: AdministrativeDivisions
    },
    {
        path: "/geo/cities",
        component: Cities
    },
    {
        path: "/geo/cityDivisions",
        component: CityDivisions
    }
]

export default GeoRoutes
