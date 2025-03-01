import {
    DialogForm,
    Enum,
    LongText,
    Title,
} from "Form"
import { PersonField } from "Contacts"

const fields =
    <>
        <PersonField
            byGuid
            placeholder="TicketingConsumer"
            property="ConsumerGuid"
            required
        />
        <Title />
        <Enum
            entityType="TicketPriority"
            placeholder="InfraPriority"
            property="priorityId"
            required="TicketingPleaseChooseThePriorityForThisTicketChooseLessImportanceIfItIsLessUrgent"
        />
        <LongText
            placeholder="TicketingPleaseDescribeTheProblem"
            property="body"
            required="TicketingWeNeedToKnowTheProblemToBeAbleToHelp"
        />
    </>

const CreateTicket = props => {
    return <DialogForm
        entityType="ticket"
        inputs={fields}
        title="TicketingCreateTicket"
    />
}

export default CreateTicket
