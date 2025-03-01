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

const QuestionForm = (props) => {

    return <DialogForm
        {...props}
        title="QuestionsQuestion"
        entityType="Question"
        inputs={inputs}
    />
}

export default QuestionForm
