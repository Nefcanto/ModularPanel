import {
    DateTime,
    DialogForm,
} from "Form"
import { PersonField } from "Contacts"

const inputs = <>
    <PersonField
        identifyingProperty="contactsPersonId"
    />
    <DateTime
        property="StartDate"
        required
    />
    <DateTime
        property="EndDate"
        required
    />

</>

const SubscriberForm = props => {
    return <DialogForm
        {...props}
        entityType="Subscriber"
        humanReadableEntityType="SubscribersSubscriber"
        inputs={inputs}
    />

}

export default SubscriberForm
