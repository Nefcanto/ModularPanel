import {
    DialogForm,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
</>

const SkillForm = <DialogForm
    entityType="Skill2"
    humanReadableEntityType="GradingSkill"
    inputs={inputs}
/>

export default SkillForm
