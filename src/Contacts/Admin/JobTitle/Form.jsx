import {
    DialogForm,
    Text,
} from "Form"

const inputs = <>
    <Text
        property="Text"
        placeholder="InfraTitle"
    />
</>

const JobTitleForm = props => {
    return <DialogForm
        title="ContactsJobTitle"
        entityType="JobTitle"
        inputs={inputs}
        {...props}
    />
}

export default JobTitleForm
