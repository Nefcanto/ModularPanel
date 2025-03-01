import { Slug } from "Form"
import { NaturalPersonForm } from "Contacts"

const augmentInputs = entity => <>
    <Slug />
</>

const InstructorForm = () => {
    return <NaturalPersonForm
        augmentInputs={augmentInputs}
        entityType="Instructor"
        humanReadableEntityType="CoursesInstructor"
    />
}

export default InstructorForm
