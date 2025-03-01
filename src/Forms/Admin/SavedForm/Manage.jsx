import { useContext } from "react"
import NoteAltIcon from "@mui/icons-material/NoteAlt"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageSavedForm = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={url({
            path: "/forms/savedForms",
            query: {
                form: entity.key
            },
            parent: entity
        })}
        icon={NoteAltIcon}
        title="FormsSeeFilledForms"
    />

}

export default ManageSavedForm
