import Grid4x4Icon from "@mui/icons-material/Grid4x4"
import { EntityAction } from "List"
import SectionsDialog from "./SectionsDialog"

const ManageSections = props => <EntityAction
    {...props}
    dialog={SectionsDialog}
    icon={Grid4x4Icon}
    superAdmin
    title="ContentsManageSections"
/>

export default ManageSections
