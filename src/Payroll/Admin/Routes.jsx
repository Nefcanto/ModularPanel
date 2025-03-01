import SalaryStructures from "./SalaryStructure/List"
import SalaryStructureSkillLevels from "./SalaryStructureSkillLevel/List"

const PayrollRoutes = [
    {
        path: "/salaryStructures",
        component: SalaryStructures
    },
    {
        path: "/salaryStructureSkillLevels",
        component: SalaryStructureSkillLevels
    }
]

export default PayrollRoutes
