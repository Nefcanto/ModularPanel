import {
    Check,
    DialogForm,
    LongText,
    Lookup,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
    <LongText
        placeholder="InfraSummary"
        property="Summary"
    />
    <Check
        placeholder="CoursesIsFree"
        property="IsFree"
    />
    <Lookup
        choose={entity => entity.id}
        display={entity => entity.title}
        entityType="CourseLevel"
        placeholder="CoursesLevel"
        property="LevelId"
    />
</>

const CourseForm = <DialogForm
    entityType="Course"
    humanReadableEntityType="CoursesCourse"
    inputs={inputs}
/>

export default CourseForm
