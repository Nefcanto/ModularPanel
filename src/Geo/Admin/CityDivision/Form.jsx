import {
    DialogForm,
    Key,
    Parent,
    Slug,
    Text,
} from "Form"

const inputs = entity => <>
    <Key />
    <Text
        property="Name"
        placeholder="InfraName"
        required
    />
    <Slug />
    <Parent
        entityType="CityDivision"
        show={entity => entity.name}
    />
</>

const CityDivisionForm = <DialogForm
    entityType="CityDivision"
    humanReadableEntityType="GeoCityDivision"
    inputs={inputs}
/>

export default CityDivisionForm
