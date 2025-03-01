import PlusOneIcon from "@mui/icons-material/PlusOne"
import { EntityAction } from "List"

const BundleWithOtherItems = ({
    entityType,
    ...rest
}) => {
    return <EntityAction
        title="BundlingBundleWithOtherItems"
        icon={PlusOneIcon}
        {...rest}
    />
}

export default BundleWithOtherItems
