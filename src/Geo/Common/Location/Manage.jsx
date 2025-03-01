import LocationOnIcon from "@mui/icons-material/LocationOn"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import { useContext } from "react"
import LocationForm from "./Form"

const ManageLocation = ({
    entityGuid,
    entityType,
    module,
}) => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        dialog={<LocationForm
            entityGuid={entityGuid ?? entity?.guid}
            entityType={entityType ?? entity?.relatedItems?.entityType}
            module={module ?? entity?.relatedItems?.module}
        />}
        icon={LocationOnIcon}
        title="GeoManageLocation"
    />
}

export default ManageLocation
