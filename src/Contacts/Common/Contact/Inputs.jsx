import {
    Email,
    Link,
    Phone,
} from "Form"

const ContactsInputs = () => {
    return <>
        <Email
            placeholder="ContactsDefaultEmail"
            property="DefaultEmail"
        />
        <Phone
            placeholder="ContactsDefaultPhone"
            property="DefaultPhone"
        />
        <Link
            placeholder="ContactsWebsite"
            property="Website"
        />
        {/* <LongText
            placeholder="contactsNotes"
            property="Notes"
        /> */}
    </>
}

export default ContactsInputs
