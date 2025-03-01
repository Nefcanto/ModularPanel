import {
    LongText,
    Slug,
    Text,
    Title,
} from "Form"

const Inputs = entity => <>
    <Title />
    <Text
        property="Subtitle"
        placeholder="InfraSubtitle"
    />
    <Slug />
    <LongText
        property="Summary"
        placeholder="InfraSummary"
    />
</>

export default Inputs
