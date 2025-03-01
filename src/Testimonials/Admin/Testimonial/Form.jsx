import {
    LongText,
    Text,
} from "Form"
import { NaturalPersonForm } from "Contacts"

const augmentInputs = entity => <>
    <Text
        property="Subtitle"
        placeholder="InfraSubtitle"
    />
    <Text
        property="VideoUrl"
        placeholder="TestimonialsVideoUrl"
    />
    <LongText
        property="Quote"
        placeholder="TestimonialsQuote"
    />
</>

const TestimonialForm = () => {
    return <NaturalPersonForm
        entityType="Testimonial"
        augmentInputs={augmentInputs}
    />
}

export default TestimonialForm
