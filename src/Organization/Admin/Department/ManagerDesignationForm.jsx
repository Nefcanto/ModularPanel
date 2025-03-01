import { DialogForm } from "Form"
import EmployeeField from "../Employee/Field"

const inputs = entity => <>
    <EmployeeField
        property="ManagerId"
        placeholder="OrganizationManager"
    />
</>

const ManagerDesignationForm = props => {

    return <DialogForm
        title="OrganizationManagerDesignation"
        entityType="Department"
        inputs={inputs}
        {...props}
    />
}

export default ManagerDesignationForm
