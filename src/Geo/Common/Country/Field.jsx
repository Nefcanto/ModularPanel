import { Lookup } from "Form"

const CountryField = props => {
    return <Lookup
        byKey
        choose={i => i.key}
        display={i => i.name}
        entityType="country"
        hideForSingleItem
        placeholder="GeoCountry"
        property="Country"
        propertyAccessor={entity => entity.geoCountryKey}
        {...props}
    />
}

export default CountryField
