import { Image } from "List"

const PersonImage = ({ person }) => <Image
    deletionUrl={`/person/deleteImage?id=${person?.contactsPersonId}&role=${window.role}`}
    uploadUrl={`/person/setImage?id=${person?.contactsPersonId}&role=${window.role}`}
    url={person?.relatedItems?.personImageUrl || person.relatedItems.imageUrl}
/>

export default PersonImage
