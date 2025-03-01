import { useContext } from "react"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import { camelize } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ViewComments = ({
    goTo,
}) => {

    const basePath = goTo || "/comments"
    const { entity } = useContext(EntityContext)
    const entityType = camelize(entity?.relatedItems?.entityType)
    const module = camelize(entity?.relatedItems.module)

    return <EntityAction
        goTo={`${basePath}${basePath.indexOf("?") > -1 ? "&" : "?"}module=${module}&entityType=${camelize(entity?.relatedItems?.entityType)}&entity=${entity?.guid}&pp=${module}&pt=${entityType}&pid=${entity?.id}`}
        icon={QuestionAnswerIcon}
        title="SocialViewComments"
    />
}

export default ViewComments
