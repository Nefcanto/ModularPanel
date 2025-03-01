import { parseQuery } from "App"
import { Phones as ContactsPhones } from "ContactsCommon"

const Phones = ({
    grandparentEntity,
    parentEntity,
    progress,
}) => {

    const {
        advertisementId,
    } = parseQuery()

    return progress || <>
        <ContactsPhones
            breadcrumbItems={[
                {
                    title: "Advertisements",
                    link: "/advertisements"
                },
                {
                    title: grandparentEntity?.title,
                    link: `/advertisements`
                },
                {
                    title: "Contacts",
                    link: `/advertisement/contacts?advertisementId=${advertisementId}`
                },
                {
                    title: parentEntity?.contactsPersonDisplayName,
                    link: `/advertisement/contacts?advertisementId=${advertisementId}&title=${parentEntity?.contactsPersonDisplayName}`
                },
                {
                    title: "Phones"
                }
            ]}
        />
    </>
}

export default Phones
