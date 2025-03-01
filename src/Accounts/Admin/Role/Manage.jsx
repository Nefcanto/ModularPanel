import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import { EntityAction } from "List"
import RolesDialog from "./Dialog"

const ManageRoles = <EntityAction
    title="AccountsManageRoles"
    icon={AdminPanelSettingsIcon}
    dialog={RolesDialog}
/>

export default ManageRoles
