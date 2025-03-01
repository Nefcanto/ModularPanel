import {
    DialogForm,
    Enum,
    Phone,
} from "Form"
import { CountryField } from "Geo"

const inputs = <>
    <CountryField
        required
    />
    <Phone
        placeholder="ContactsPhone"
        property="PhoneValue"
        required
    />
    <Enum
        entityType="PhoneType"
        property="ContactsPhoneType"
        required
    />
</>

const PhoneForm = props => {
    return <DialogForm
        entityType="Phone"
        humanReadableEntityType="ContactsPhone"
        inputs={inputs}
        {...props}
    />
}

export default PhoneForm
