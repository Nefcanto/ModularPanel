import {
    DialogForm,
    Key,
    Slug,
    Text,
} from "Form"

const inputs = entity => <>
    <Key />
    <Slug />
    <Text
        property="Name"
        placeholder="GeoName"
    />
</>

const CityForm = <DialogForm
    entityType="City"
    humanReadableEntityType="GeoCity"
    inputs={inputs}
/>

export default CityForm
