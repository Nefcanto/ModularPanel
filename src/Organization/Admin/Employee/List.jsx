import {
    Image,
    List,
    Text,
} from "List"
import EmployeeForm from "./Form"

const filters = <>
    <Text
        property="FirstName"
        placeholder="ContactsFirstName"
    />
    <Text
        property="LastName"
        placeholder="ContactsLastName"
    />
    <Text
        property="FullName"
        placeholder="ContactsFullName"
    />
</>

const headers = <>
    <th></th>
    <th>InfraName</th>
</>

const row = entity => {
    return <>
        <Image />
        <td>{entity.fullName}</td>
    </>
}

const Employees = () => {
    return <List
        title="OrganizationEmployees"
        entityType="Employee"
        filters={filters}
        headers={headers}
        row={row}
        create={EmployeeForm}
        hasDelete
        hasEdit
    />
}

export default Employees
