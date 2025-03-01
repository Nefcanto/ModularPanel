import Users from "./User/List"
import Roles from "./Role/List"

const AccountsRoutes = [
    {
        path: "/users",
        component: Users
    },
    {
        path: "/roles",
        component: Roles
    }
]

export default AccountsRoutes
