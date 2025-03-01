import {
    AddressManage,
    ManageSocialProfiles,
    PhoneManage,
} from "Contacts"

const EntityActions = entity => <>
    <AddressManage
        goTo={`/addresses?contactId=${entity.contactsContactId}&advertisementId=${entity.advertisementId}&pp=Advertisements&pt=AdvertisementPlace&pid=${entity.id}&gpp=Advertisements&gpt=Advertisement&gpid=${entity.advertisementId}`}
    />
    <PhoneManage
        goTo={`/phones?contactId=${entity.contactsContactId}&advertisementId=${entity.advertisementId}&pp=Advertisements&pt=AdvertisementContact&pid=${entity.id}&gpp=Advertisements&gpt=Advertisement&gpid=${entity.advertisementId}`}
    />
    <ManageSocialProfiles />
</>

export default EntityActions
