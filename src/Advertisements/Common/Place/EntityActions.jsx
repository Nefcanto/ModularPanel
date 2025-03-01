import {
    AddressManage,
    ManageSocialProfiles,
    PhoneManage,
} from "Contacts"
import { ManageLocation } from "Geo"

const EntityActions = entity => <>
    <AddressManage
        goTo={`/addresses?contactId=${entity.contactsContactId}&advertisementId=${entity.advertisementId}&pp=Advertisements&pt=AdvertisementPlace&pid=${entity.id}&gpp=Advertisements&gpt=Advertisement&gpid=${entity.advertisementId}`}
    />
    <PhoneManage
        goTo={`/phones?contactId=${entity.contactsContactId}&advertisementId=${entity.advertisementId}&pp=Advertisements&pt=AdvertisementPlace&pid=${entity.id}&gpp=Advertisements&gpt=Advertisement&gpid=${entity.advertisementId}`}
    />
    <ManageSocialProfiles
        goTo={`/socialProfiles?contactId=${entity.contactsContactId}`}
    />
    <ManageLocation />
</>

export default EntityActions
