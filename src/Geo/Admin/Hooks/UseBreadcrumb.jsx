import GeoRoutes from "../Routes"
import {
    containing,
    equalTo,
    url,
} from "App"

const useGeoBreadcrumb = ({
    grandparent,
    greatGrandparent,
    greatGreatGrandparent,
    parent,
    path,
    query,
}) => {

    const isModuleRoute = GeoRoutes.find(i => i.path === path)
    const hasModule =
        query["entityType"]?.toLowerCase() === "Geo"?.toLowerCase() ||
        query["entityType"]?.toLowerCase() === "Country"?.toLowerCase() ||
        query["entityType"]?.toLowerCase() === "AdministrativeDivision"?.toLowerCase() ||
        query["entityType"]?.toLowerCase() === "City"?.toLowerCase() ||
        query["entityType"]?.toLowerCase() === "CityDivision"?.toLowerCase()

    let country
    let administrativeDivision
    let city
    let cityDivision

    country = parent
    if (greatGreatGrandparent) {
        country = greatGreatGrandparent
        administrativeDivision = greatGrandparent
        city = grandparent
        cityDivision = parent
    }
    else if (greatGrandparent) {
        country = greatGrandparent
        administrativeDivision = grandparent
        city = parent
    }
    else if (grandparent) {
        country = grandparent
        administrativeDivision = parent
    }

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "GeoCountries",
                link: path !== "/geo/countries" && "/geo/countries"
            },
            country && {
                title: country.name,
                link: url({
                    path: "/geo/countries",
                    filters: [
                        containing("search", country.name)
                    ]
                })
            },
            country && {
                title: "GeoAdministrativeDivisions",
                link: path !== "/geo/administrativeDivisions" && url({
                    path: "/geo/administrativeDivisions",
                    query: {
                        country: country.key
                    },
                    parent: country
                })
            },
            administrativeDivision && {
                title: administrativeDivision.name,
                link: url({
                    path: "/geo/administrativeDivisions",
                    query: {
                        country: country.key,
                    },
                    filters: [
                        containing("search", administrativeDivision.name),
                    ],
                    parent: country
                })
            },
            administrativeDivision && {
                title: "GeoCities",
                link: path !== "/cities" && url({
                    path: "/geo/cities",
                    query: {
                        country: country.key,
                        administrativeDivision: administrativeDivision.key,
                    },
                    parent: administrativeDivision,
                    grandparent: country
                })
            },
            city && {
                title: city.name,
                link: url({
                    path: "/geo/cities",
                    query: {
                        country: country.key,
                        administrativeDivision: administrativeDivision.key,
                    },
                    filters: [
                        containing("search", city.name)
                    ],
                    parent: administrativeDivision,
                    grandparent: country
                })
            },
            city && {
                title: "GeoCityDivisions",
                link: path !== "/geo/cityDivisions" && url({
                    path: "/geo/cityDivisions",
                    query: {
                        country: country.key,
                        administrativeDivision: administrativeDivision.key,
                        city: city.key,
                    },
                    parent: city,
                    grandparent: administrativeDivision,
                    greatGrandparent: country
                })
            },
            cityDivision && {
                title: cityDivision.name,
                link: url({
                    path: "/geo/cityDivisions",
                    query: {
                        country: country.key,
                        administrativeDivision: administrativeDivision.key,
                        city: city.key,
                    },
                    filters: [
                        containing("search", cityDivision.name)
                    ],
                    parent: city,
                    grandparent: administrativeDivision,
                    greatGrandparent: country
                })
            },
        ]
    }
}

export default useGeoBreadcrumb
