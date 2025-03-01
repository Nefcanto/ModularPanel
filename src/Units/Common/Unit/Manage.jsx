import SquareFootIcon from "@mui/icons-material/SquareFoot"
import { EntityAction } from "List"
import UnitsDialog from "./UnitsDialog"

const ManageUnits = () => <EntityAction
    dialog={UnitsDialog}
    icon={SquareFootIcon}
    title="UnitsManageUnits"
/>

export default ManageUnits
