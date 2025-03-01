import { DialogForm } from "Form"
import { LevelField } from "Grading"

const inputs = <>
    <LevelField
        property="SkillLevelGuid"
    />
</>

const SalaryStructureSkillLevelForm = <DialogForm
    entityType="SalaryStructureSkillLevel"
    humanReadableEntityType="PayrollSalaryStructureSkillLevel"
    inputs={inputs}
/>

export default SalaryStructureSkillLevelForm
