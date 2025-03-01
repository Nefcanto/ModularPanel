import { DialogForm } from "Form"
import { JuridicalPersonInputs } from "ContactsCommon"

const JuridicalPersonEditForm = () => {

    return <DialogForm
        title="ContactsJuridicalPerson"
        entityType="JuridicalPerson"
        inputs={JuridicalPersonInputs}
        alwaysEdit
        entityIdExtractor={entity => entity.contactsPersonId}
    />
}

export default JuridicalPersonEditForm
