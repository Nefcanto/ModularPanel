import { useContext } from "react"
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import TypesDialog from "./TypesDialog"

const ManageTypes = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        dialog={TypesDialog}
        entity={entity}
        icon={PlaylistAddCheckIcon}
        title="SalonsManageTypes"
    />
}

export default ManageTypes
