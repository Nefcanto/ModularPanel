import PersonIcon from "@mui/icons-material/Person"
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates"
import Groups2Icon from "@mui/icons-material/Groups2"
import {
    BooleanProperty,
    EntityAction,
    List,
} from "List"
import DepartmentForm from "./Form"
import ManagerDesignationForm from "./ManagerDesignationForm"

const headers = <>
    <th>InfraTitle</th>
    <th>OrganizationIsActive</th>
</>

const row = entity => {
    return <>
        <td>{entity.title}</td>
        <BooleanProperty
            actionUrl={`/department/toggleBoolean?id=${entity.id}&property=IsActive`}
            value={entity.isActive}
        />
    </>
}

const entityActions = entity => <>
    <EntityAction
        dialog={ManagerDesignationForm}
        icon={PersonIcon}
        title="OrganizationManagerDesignation"
    />
    <EntityAction
        goTo={`/department/skills?departmentId=${entity.id}`}
        icon={TipsAndUpdatesIcon}
        title="OrganizationManageSkills"
    />
    <EntityAction
        goTo={`/department/employees?departmentId=${entity.id}`}
        icon={Groups2Icon}
        title="OrganizationEmployees"
    />
</>

const Departments = () => {
    return <List
        title="OrganizationDepartments"
        entityType="Department"
        create={DepartmentForm}
        headers={headers}
        row={row}
        entityActions={entityActions}
        hasDelete
        hasEdit
    />
}

export default Departments
