import BubbleChartIcon from "@mui/icons-material/BubbleChart"
import { EntityAction } from "List"
import ScopeDialog from "./ScopeDialog"

const ChangeScope = () => <EntityAction
    dialog={ScopeDialog}
    icon={BubbleChartIcon}
    title="GranularitiesChangingScope"
/>

export default ChangeScope
