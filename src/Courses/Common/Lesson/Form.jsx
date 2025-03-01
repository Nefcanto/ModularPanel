import {
    DialogForm,
    LongText,
    Numeric,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Numeric
        property="Minutes"
        placeholder="CoursesMinutes"
        naturalNumbers
    />
    <LongText
        property="Description"
        placeholder="InfraDescription"
    />
</>

const LessonForm = () => {
    return <DialogForm
        entityType="Lesson"
        humanReadableEntityType="CoursesLesson"
        inputs={inputs}
    />
}

export default LessonForm
