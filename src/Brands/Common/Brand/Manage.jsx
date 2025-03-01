import { useContext } from "react"
import LoyaltyIcon from "@mui/icons-material/Loyalty"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import ChangeBrand from "./ChangeBrandForm"

const ManageBrand = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        dialog={ChangeBrand}
        entity={entity}
        icon={LoyaltyIcon}
        title="BrandsChangeBrand"
    />
}

export default ManageBrand
