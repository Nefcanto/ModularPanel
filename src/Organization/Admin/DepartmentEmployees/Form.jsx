import { DialogForm } from "Form"
import EmployeeField from "../Employee/Field"

const DepartmentEmployeeForm = props => {

    const inputs = <>
        <EmployeeField
            choose={i => i.id}
            property="EmployeeId"
        />
    </>

    return <DialogForm
        title="OrganizationAssignEmployees"
        entityType="DepartmentEmployee"
        inputs={inputs}
        {...props}
    />
}

export default DepartmentEmployeeForm
