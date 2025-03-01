import { Text } from "Form"
import ContactsInputs from "../Contact/Inputs"

const NaturalPersonInputs = () => {
    return <>
        <Text
            property="FirstName"
            placeholder="ContactsFirstName"
            required
        />
        <Text
            property="LastName"
            placeholder="ContactsLastName"
            required
        />
        <Text
            property="NationalIdentificationNumber"
            placeholder="ContactsNationalIdentificationNumber"
        />

        {ContactsInputs()}
    </>
}

export default NaturalPersonInputs
