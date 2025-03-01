import { useState } from "react"
import AdministrativeDivisionField from "./AdministrativeDivision/Field"
import CityDivisionField from "./CityDivision/Field"
import CityField from "./City/Field"
import CountryField from "./Country/Field"

const GeoFields = ({
    entityType,
    module,
    ...rest
}) => {

    const [country, setCountry] = useState("")
    const [administrativeDivision, setAdministrativeDivision] = useState("")
    const [city, setCity] = useState("")

    return <>
        <CountryField
            onChange={country => setCountry(country)}
            required
        />
        <AdministrativeDivisionField
            country={country}
            onChange={administrativeDivision => setAdministrativeDivision(administrativeDivision)}
            required
        />
        <CityField
            administrativeDivision={administrativeDivision}
            onChange={city => setCity(city)}
            required
        />
        <CityDivisionField
            city={city}
            required
            {...rest}
        />
    </>
}

export default GeoFields
