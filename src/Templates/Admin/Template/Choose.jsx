import FormatShapesIcon from "@mui/icons-material/FormatShapes"
import { EntityAction } from "List"
import TemplateDialog from "./Dialog"

const ChooseTemplate = () => {
    return <EntityAction
        dialog={TemplateDialog}
        icon={FormatShapesIcon}
        title="TemplatesTemplate"
    />
}

export default ChooseTemplate
