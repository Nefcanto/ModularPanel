import { useContext } from "react"
import AddIcon from "@mui/icons-material/Add"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import EntityAction from "./EntityAction"
import Unify from "../../Unify"

const AddChildAction = () => {

    const { entity } = useContext(EntityContext)
    const {
        create,
        upsert,
    } = useContext(ListContext)

    let dialog = null
    if (create && typeof create !== "string") {
        dialog = <Unify
            component={create}
            parentId={entity.id}
        />
    }
    if (upsert && typeof upsert !== "string") {
        dialog = <Unify
            component={upsert}
            parentId={entity.id}
        />
    }

    return <EntityAction
        dialog={dialog}
        doNotAddEntityToTheDialog
        icon={<AddIcon />}
        title="InfraCreate"
    />
}

export default AddChildAction
