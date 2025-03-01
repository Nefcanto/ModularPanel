import EntityActions from "./EntityActions"
import ListActions from "./ListActions"
import {
    Image,
    List,
} from "List"

const headers = <>
    <th>Image</th>
    <th>InfraName</th>
</>

const row = entity => <>
    <Image
        deletionUrl={`/person/deleteImage?id=${entity.contactsPersonId}`}
        uploadUrl={`/person/setImage?id=${entity.contactsPersonId}`}
        url={entity.relatedItems?.personImageUrl}
    />
    <td>{entity.contactsPersonDisplayName}</td>

</>

const AdvertisementContacts = ({
    entityType,
    ...rest
}) => {
    return <List
        entityActions={EntityActions}
        entityType="AdvertisementContact"
        hasDelete
        headers={headers}
        listActions={ListActions}
        row={row}
        title="Persons"
        {...rest}
    />
}

export default AdvertisementContacts
