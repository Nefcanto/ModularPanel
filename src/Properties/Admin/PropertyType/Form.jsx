import {
    DialogForm,
    Key,
    Slug,
    Text,
} from "Form"

const inputs = entity => <>
    <Slug />
    <Key />
    <Text
        property="Name"
        placeholder="InfraName"
    />
</>

const PropertyTypeForm = () => {
    return <DialogForm
        humanReadableEntityType="PropertiesPropertyType"
        entityType="AdminPropertyType"
        inputs={inputs}
    />
}

export default PropertyTypeForm
