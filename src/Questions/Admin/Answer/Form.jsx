import { DialogForm } from "Form"
import { UserField } from "Accounts"

const inputs = entity => <>
    <UserField
        byGuid
        choose={entity => entity.guid}
        placeholder="QuestionsAuthor"
        property="PersonGuid"
    />
</>

const AnswerForm = props => {

    return <DialogForm
        {...props}
        entityType="Answer"
        inputs={inputs}
        title="QuestionsAnswer"
    />
}

export default AnswerForm
