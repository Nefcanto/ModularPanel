import { useContext } from "react"
import QuizIcon from "@mui/icons-material/Quiz"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const EntityFaqPage = ({ ...rest }) => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        {...rest}
        goTo={`/seo/entityFaqPages?entityType=${entity.relatedItems.entityType}&entityGuid=${entity.guid}`}
        icon={QuizIcon}
        title="SeoFaqPages"
    />
}

export default EntityFaqPage
