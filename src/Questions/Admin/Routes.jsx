import Answers from "./Answer/List"
import EntityQuestions from "./EntityQuestion/List"
import QuestionComments from "./Question/Comments"
import Questions from "./Question/List"

const QuestionsRoutes = [
    {
        path: "/questions",
        component: Questions
    },
    {
        path: "/entityQuestions",
        component: EntityQuestions
    },
    {
        path: "/answers",
        component: Answers
    },
    {
        path: "/questionComments",
        component: QuestionComments
    },
]

export default QuestionsRoutes
