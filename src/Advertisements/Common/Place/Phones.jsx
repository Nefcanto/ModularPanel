import { parseQuery } from "App"
import { Phones as ContactsPhones } from "Contacts"

const Phones = ({
    grandparentEntity,
    parentEntity,
    progress,
}) => {

    const {
        advertisementId,
    } = parseQuery()

    return progress || <>
        <ContactsPhones />
    </>
}

export default Phones
