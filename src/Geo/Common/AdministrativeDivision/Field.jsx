import { Lookup } from "Form"

const AdministrativeDivisionField = ({
    country,
    onChange,
    ...rest
}) => {
    return country
        ?
        <Lookup
            byKey
            choose={i => i.key}
            display={i => i.name}
            entityType="AdministrativeDivision"
            hideForSingleItem
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="GeoAdministrativeDivision"
            property="AdministrativeDivision"
            propertyAccessor={entity => entity.geoAdministrativeDivisionKey}
            query={{
                country: country
            }}
            {...rest}
        />
        :
        null
}

export default AdministrativeDivisionField
