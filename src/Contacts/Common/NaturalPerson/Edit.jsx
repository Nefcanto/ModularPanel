import {
    DialogForm,
    Text,
} from "Form"
import { NaturalPersonInputs } from "ContactsCommon"

const NaturalPersonEditForm = () => {

    return <DialogForm
        title="ContactsNaturalPerson"
        entityType="NaturalPerson"
        inputs={NaturalPersonInputs}
        alwaysEdit
        entityIdExtractor={entity => entity?.contactsPersonId || entity.id}
    />
}

export default NaturalPersonEditForm
