import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import {
    DateTimeTitleAgo,
    EntityAction,
    List,
} from "List"
import EntityQuestionForm from "./Form"
import filters from "./Filters"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraCreationDate</th>
    <th>StateMachinesState</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <DateTimeTitleAgo
        date={entity.creationUtcDate}
    />
    <td>
        StateMachinesState
    </td>
</>

const entityActions = entity => <>
    <EntityAction
        goTo={`/answers?questionId=${entity.id}&pp=Questions&pt=entityQuestion&pid=${entity.id}`}
        icon={QuestionAnswerIcon}
        title="QuestionsManageAnswers"
    />
</>

const EntityQuestions = () => {

    return <List
        create={EntityQuestionForm}
        entityActions={entityActions}
        entityType="EntityQuestion"
        filters={filters}
        hasContent
        headers={headers}
        row={row}
        title="QuestionsEntityQuestions"
    />
}

export default EntityQuestions
