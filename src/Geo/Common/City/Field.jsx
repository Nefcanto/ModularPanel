import { Lookup } from "Form"

const CityField = ({
    administrativeDivision,
    onChange,
    ...rest
}) => {
    return administrativeDivision
        ?
        <Lookup
            byKey
            choose={i => i.key}
            display={i => i.name}
            entityType="City"
            hideForSingleItem
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="GeoCity"
            property="City"
            propertyAccessor={entity => entity.geoCityKey}
            query={{
                administrativeDivision: administrativeDivision
            }}
            {...rest}
        />
        :
        null
}

export default CityField
