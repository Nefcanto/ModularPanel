import { useContext } from "react"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { EntityContext } from "Contexts"
import { url } from "App"
import { EntityAction } from "List"

const ManageEntityQuestions = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        goTo={url({
            path: "/entityQuestions",
            query: {
                entityGuid: entity.guid,
                entityType: entity.relatedItems.entityType,
                module: entity.relatedItems.module,
            },
            parent: entity
        })}
        icon={QuestionMarkIcon}
        title="QuestionsManageQuestions"
    />
}

export default ManageEntityQuestions
