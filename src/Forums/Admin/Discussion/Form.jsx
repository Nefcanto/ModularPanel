import {
    DialogForm,
    Title,
} from "Form"
import { PersonField } from "Contacts"

const inputs = entity => <>
    <Title />
    <PersonField
        byGuid
        placeholder="ForumsAuthor"
        property="PersonGuid"
    />
</>

const DiscussionForm = () => {

    return <DialogForm
        entityType="Discussion"
        humanReadableEntityType="ForumsDiscussion"
        inputs={inputs}
    />
}

export default DiscussionForm
