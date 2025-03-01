import { List } from "List"
import DepartmentEmployeeForm from "./Form"

const headers = <>
    <th>InfraName</th>
</>

const row = entity => {
    return <>
        <td>{entity.employee}</td>
    </>
}

const DepartmentEmployees = () => {
    return <List
        title="OrganizationDepartmentEmployees"
        entityType="DepartmentEmployee"
        create={DepartmentEmployeeForm}
        headers={headers}
        row={row}
        hasDelete
    />
}

export default DepartmentEmployees
