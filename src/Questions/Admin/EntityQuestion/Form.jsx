import {
    DialogForm,
    Slug,
    Title,
} from "Form"
import { UserField } from "Accounts"

const inputs = entity => <>
    <Title />
    <Slug />
    <UserField
        property="UserGuid"
        placeholder="QuestionsAuthor"
        choose={entity => entity.guid}
    />
</>

const EntityQuestionForm = (props) => {

    return <DialogForm
        {...props}
        title="QuestionsEntityQuestions"
        entityType="EntityQuestion"
        inputs={inputs}
    />
}

export default EntityQuestionForm
