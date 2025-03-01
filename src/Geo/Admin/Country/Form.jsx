import {
    DialogForm,
    Enum,
    Key,
    Slug,
    Text,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Text
        property="Name"
        placeholder="Name"
    />
    <Enum
        byKey
        property="AdministrativeDivisionType"
        entityType="AdministrativeDivisionType"
        placeholder="GeoAdministrativeDivisionType"
        required="GeoPleaseSelectAAdministrativeDivisionType"
    />
    <Text
        property="Capital"
        placeholder="GeoCapital"
        required
    />
    <Text
        property="OfficialName"
        placeholder="GeoOfficialName"
        required
    />
    <Text
        property="AlternativeName"
        placeholder="GeoAlternativeName"
    />
    <Text
        property="IsoTwoLetterCode"
        placeholder="GeoIsoTwoLetterCode"
    />
    <Text
        property="IsoThreeLetterCode"
        placeholder="GeoIsoThreeLetterCode"
    />
    <Text
        property="IsoNumericCode"
        placeholder="GeoIsoNumericCode"
    />
    <Text
        property="Cctld"
        placeholder="GeoCctld"
    />
</>

const CountryForm = <DialogForm
    entityType="Country"
    humanReadableEntityType="GeoCountry"
    inputs={inputs}
/>

export default CountryForm
