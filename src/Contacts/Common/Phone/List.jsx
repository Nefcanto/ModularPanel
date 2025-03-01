import {
    BooleanProperty,
    List,
} from "List"
import PhoneForm from "./Form"

const headers = <>
    <th>GeoCountry</th>
    <th>ContactsPhone</th>
    <th>ContactsType</th>
    <th>InfraIsDefault</th>
    <th>SocialClickCount</th>
</>

const row = entity => <>
    <td>
        {entity?.countryName}
    </td>
    <td>
        {entity?.phoneValue}
    </td>
    <td>
        {entity.relatedItems.phoneTypeKey}
    </td>
    <BooleanProperty
        actionUrl={`/phone/toggleBoolean?id=${entity.id}&property=isDefault`}
        nullOrFalse
        reloadListOnSuccess
        value={entity?.isDefault}
    />
    <td>
        {entity?.relatedItems?.clickCount}
    </td>
</>

const Phones = props => {
    return <List
        title="ContactsPhones"
        entityType="Phone"
        headers={headers}
        create={PhoneForm}
        row={row}
        hasEdit
        hasDelete
        {...props}
    />
}

export default Phones
