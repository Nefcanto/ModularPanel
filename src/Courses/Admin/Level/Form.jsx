import {
    DialogForm,
    Key,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Title />
</>

const LevelForm = <DialogForm
    entityType="CourseLevel"
    inputs={inputs}
    title="CoursesCreateLevel"
/>

export default LevelForm
