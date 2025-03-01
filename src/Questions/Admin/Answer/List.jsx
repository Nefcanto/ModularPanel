import {
    DateTimeTitleAgo,
    List,
    Title,
} from "List"
import AnswerForm from "./Form"

const filters = <>
    <Title />
</>

const headers = <>
    <th>InfraCreationDate</th>
    <th>QuestionsAuthor</th>
    <th>InfraState</th>
</>

const row = entity => <>
    <DateTimeTitleAgo
        date={entity.creationUtcDate}
    />
    <td>
        {entity.contactsPersonDisplayName}
    </td>
    <td>
        StateMachinesState
    </td>
</>

const Answers = ({
    parentEntity,
    progress,
}) => {

    return !progress && <List
        breadcrumbItems={[
            {
                title: "QuestionsQuestions",
                link: "/questions"
            },
            {
                title: `${parentEntity?.title}`,
                link: `/questions?title=${parentEntity?.title}`
            },
            {
                title: "QuestionsAnswers"
            }
        ]}
        create={AnswerForm}
        entityType="Answer"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="Answers"
    />
}

export default Answers
