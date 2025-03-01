import { Lookup } from "Form"

const PropertyTypeField = props => {
    return <Lookup
        byKey
        choose={i => i.key}
        display={i => i.name}
        entityType="PropertyType"
        placeholder="PropertiesPropertyType"
        property="PropertyType"
        required
        {...props}
    />
}

export default PropertyTypeField
