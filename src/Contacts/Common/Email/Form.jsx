import {
    DialogForm,
    Email,
} from "Form"

const inputs = <>
    <Email
        property="Value"
        required
    />
</>

const EmailForm = props => {
    return <DialogForm
        entityType="Email"
        humanReadableEntityType="ContactsEmail"
        inputs={inputs}
        {...props}
    />
}

export default EmailForm
