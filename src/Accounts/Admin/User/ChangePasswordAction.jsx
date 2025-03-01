import PasswordIcon from "@mui/icons-material/Password"
import { EntityAction } from "List"
import ChangePasswordDialog from "./ChangePasswordDialog"

const ChangePasswordAction = props => <EntityAction
    {...props}
    title="AccountsChangePassword"
    icon={PasswordIcon}
    dialog={ChangePasswordDialog}
/>

export default ChangePasswordAction
