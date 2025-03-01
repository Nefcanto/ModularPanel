import { Lookup } from "Form"

const CityDivisionField = ({
    city,
    onChange,
    ...rest
}) => {
    return city
        ?
        <Lookup
            byKey
            choose={i => i.key}
            display={i => i.name}
            entityType="CityDivision"
            hideForSingleItem
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="GeoCityDivision"
            property="CityDivision"
            propertyAccessor={entity => entity.geoCityDivision}
            query={{
                city: city
            }}
            {...rest}
        />
        :
        null
}

export default CityDivisionField
