import { useContext } from "react"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import { url } from "App"
import { ListContext } from "Contexts"
import { ListAction } from "List"

const ManageComments = props => {

    const {
        camelizedEntityType,
        camelizedModule,
    } = useContext(ListContext)

    const link = url({
        path: "/comments",
        granularity: "entityType",
        granularityExtractionEntity: {
            entityType: camelizedEntityType,
            module: camelizedModule,
        }
    })

    return <ListAction
        {...props}
        icon={QuestionAnswerIcon}
        notApplicableToEntities
        title="SocialComments"
        url={link}
    />
}

export default ManageComments
