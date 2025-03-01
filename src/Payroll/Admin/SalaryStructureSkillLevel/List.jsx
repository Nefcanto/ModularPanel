import {
    List,
    Text,
    Title,
} from "List"
import SalaryStructureSkillLevelForm from "./Form"

const filters = <>
    <Title />
    <Text
        property="Slug"
        placeholder="InfraSlug"
    />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>GradingSkill</th>
    <th>UnitsUnit</th>
</>

const row = entity => <>
    <td>{entity.gradingLevelTitle}</td>
    <td>{entity.gradingLevelSkill}</td>
    <td>{entity.gradingLevelUnit}</td>
</>

const SalaryStructureSkillLevels = ({
    parentEntity,
    progress,
}) => {

    return !progress && <List
        title="PayrollSalaryStructureSkillLevels"
        entityType="SalaryStructureSkillLevel"
        breadcrumbItems={[
            {
                title: "PayrollSalaryStructures",
                link: `/salaryStructures`
            },
            {
                title: `${parentEntity?.title}`,
                link: `/salaryStructures?title=${parentEntity?.title}`
            },
            {
                title: "PayrollSalaryStructureSkillLevels"
            }
        ]}
        headers={headers}
        row={row}
        create={SalaryStructureSkillLevelForm}
        hasEdit
        hasDelete
    />
}

export default SalaryStructureSkillLevels
