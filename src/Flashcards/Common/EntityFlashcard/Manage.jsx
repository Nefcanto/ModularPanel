import { useContext } from "react"
import PsychologyIcon from "@mui/icons-material/Psychology"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageFlashcards = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="FlashcardsManageFlashcards"
        icon={PsychologyIcon}
        goTo={`/entityFlashcards?entityGuid=${entity.guid}&entityType=${entity.relatedItems.entityType}&module=${entity.relatedItems.module}`}
    />
}

export default ManageFlashcards
