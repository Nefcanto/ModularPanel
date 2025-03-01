import DataArrayIcon from "@mui/icons-material/DataArray"
import { EntityAction } from "List"
import Source from "./Source"

const ChooseSource = () => {

    return <EntityAction
        dialog={Source}
        icon={DataArrayIcon}
        title="AggregatesDataSource"
    />
}

export default ChooseSource
