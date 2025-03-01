import { Text } from "Form"
import ContactsInputs from "../Contact/Inputs"

const JuridicalPersonInputs = <>
    <Text
        property="Name"
        placeholder="InfraName"
        required
    />
    <Text
        property="Slogan"
        placeholder="ContactsSlogan"
    />
    <Text
        property="Brand"
        placeholder="ContactsBrand"
    />
    {ContactsInputs}
</>

export default JuridicalPersonInputs
