import {
    DialogForm,
    Key,
    Slug,
    Title,
} from "Form"
import { NaturalPersonInputs } from "Contacts"

const inputs = entity => <>
    <NaturalPersonInputs />
</>

const EmployeeForm = props => {

    return <DialogForm
        {...props}
        entityType="Employee"
        humanReadableEntityType="OrganizationEmployee"
        inputs={inputs}
    />
}

export default EmployeeForm
