import {
    DialogForm,
    Key,
    Slug,
    Title,
} from "Form"

const inputs = entity => <>
    <Title />
    <Key />
    <Slug />
</>

const DepartmentForm = props => {

    return <DialogForm
        {...props}
        entityType="Department"
        humanReadableEntityType="OrganizationDepartment"
        inputs={inputs}
    />
}

export default DepartmentForm
