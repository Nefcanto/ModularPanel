import AccountTreeIcon from "@mui/icons-material/AccountTree"

const OrganizationMenu = [
    {
        title: "OrganizationOrganization",
        icon: AccountTreeIcon,
        children: [
            {
                title: "OrganizationDepartments",
                path: "/departments"
            },
            {
                title: "OrganizationEmployees",
                path: "/employees"
            }
        ]
    }
]

export default OrganizationMenu
