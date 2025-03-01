import Departments from "./Department/List"
import DepartmentEmployees from "./DepartmentEmployees/List"
import DepartmentSkills from "./DepartmentSkill/List"
import Employees from "./Employee/List"

const OrganizationRoutes = [
    {
        path: "/departments",
        component: Departments
    },
    {
        path: "/employees",
        component: Employees
    },
    {
        path: "/department/skills",
        component: DepartmentSkills
    },
    {
        path: "/department/employees",
        component: DepartmentEmployees
    }
]

export default OrganizationRoutes
