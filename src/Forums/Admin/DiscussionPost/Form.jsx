import { DialogForm } from "Form"
import { PersonField } from "Contacts"

const inputs = <>
    <PersonField
        byGuid
        placeholder="ForumsAuthor"
        property="PersonGuid"
    />
</>

const DiscussionPostFrom = () => {

    return <DialogForm
        entityType="DiscussionPost"
        humanReadableEntityType="ForumsDiscussionPost"
        inputs={inputs}
    />

}

export default DiscussionPostFrom
