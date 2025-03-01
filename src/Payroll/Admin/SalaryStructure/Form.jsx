import {
    DialogForm,
    LongText,
    Slug,
    Title,
} from "Form"
import { DepartmentField } from "Organization"

const inputs = <>
    <Title />
    <Slug />
    <DepartmentField />
    <LongText
        property="Summary"
        placeholder="InfraSummary"
    />
</>

const SalaryStructureForm = <DialogForm
    entityType="SalaryStructure"
    humanReadableEntityType="PayrollSalaryStructure"
    inputs={inputs}
/>

export default SalaryStructureForm
