import { Lookup } from "List"

const PropertyTypeFilter = () => {
    return <Lookup
        choose={entity => entity.key}
        display={entity => entity.name}
        entityType="PropertyType"
        placeholder="PropertiesPropertyType"
        property="propertyType"
    />
}

export default PropertyTypeFilter
