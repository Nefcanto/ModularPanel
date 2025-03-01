import { List } from "List"
import DepartmentSkillForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
</>

const row = entity => {
    return <>
        <td>{entity.skillTitle}</td>
    </>
}

const DepartmentSkills = () => {
    return <List
        title="OrganizationDepartmentSkills"
        entityType="DepartmentSkill"
        create={DepartmentSkillForm}
        headers={headers}
        row={row}
        hasDelete
    />
}

export default DepartmentSkills
