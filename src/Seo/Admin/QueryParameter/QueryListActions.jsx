import MonitorHeartIcon from "@mui/icons-material/MonitorHeart"
import { ListAction } from "List"

const QueryParametersListActions = ({
    entityType,
    module,
    ...rest
}) => {
    return <>
        <ListAction
            icon={MonitorHeartIcon}
            notApplicableToEntities
            superAdmin
            title="SeoQueryParameters"
            url={`/seo/queries?module=${module}${entityType ? `&entityType=${entityType}` : ""}`}
            {...rest}
        />
    </>
}

export default QueryParametersListActions

