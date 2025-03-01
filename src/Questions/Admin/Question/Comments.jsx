import { Comments } from "Social"

const QuestionComments = ({
    parentEntity,
    progress,
}) => {
    return !progress && <Comments
        breadcrumbItems={[
            {
                title: "QuestionsQuestions",
                link: "/questions"
            },
            {
                title: parentEntity?.title,
                link: `/questions?title=${parentEntity?.title}`
            }
        ]}
    />
}

export default QuestionComments
