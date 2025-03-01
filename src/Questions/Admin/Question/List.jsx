import {
    DateTimeTitleAgo,
    List,
    Title,
} from "List"
import {
    EntityStateProperty,
    StateMachineHeaderProvider,
} from "StateMachines"
import QuestionForm from "./Form"
import EntityActions from "./EntityActions"
import ListActions from "./ListActions"

const filters = <>
    <Title />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>InfraCreationDate</th>
    <th>InfraState</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <DateTimeTitleAgo
        date={entity.creationUtcDate}
    />
    <EntityStateProperty />
</>

const Questions = () => {

    return <List
        create={QuestionForm}
        entityActions={EntityActions}
        entityType="Question"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        listActions={ListActions}
        row={row}
        title="QuestionsQuestions"
    />
}

export default Questions
