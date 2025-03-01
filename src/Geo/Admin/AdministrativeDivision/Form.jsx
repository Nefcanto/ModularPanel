import {
    DialogForm,
    Key,
    Slug,
    Text,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Text
        placeholder="InfraName"
        property="Name"
    />
</>

const AdministrativeDivisionForm = <DialogForm
    entityType="AdministrativeDivision"
    humanReadableEntityType="GeoAdministrativeDivision"
    inputs={inputs}
/>

export default AdministrativeDivisionForm
