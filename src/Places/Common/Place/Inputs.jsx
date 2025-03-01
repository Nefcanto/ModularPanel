import {
    LongText,
    Text,
    Title,
} from "Form"

const PlaceInputs = entity => <>
    <Title />
    <Text
        placeholder="InfraSubtitle"
        property="Subtitle"
    />
    <LongText
        placeholder="InfraShortDescription"
        property="ShortDescription"
    />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
    <Text
        placeholder="PlacesWorkingHours"
        property="WorkingHours"
    />
</>

export default PlaceInputs
