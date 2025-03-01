import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import { EntityAction } from "List"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import { ViewComments } from "Social"

const EntityActions = entity => {
    return <>
        <EntityAction
            goTo={`/answers?questionId=${entity.id}&pp=questions&pt=question&pid=${entity.id}`}
            icon={QuestionAnswerIcon}
            title="QuestionsManageAnswers"
        />
        <ManageTags />
        <ManageCategories />
        <ViewComments />
    </>
}

export default EntityActions
