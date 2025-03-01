import { List } from "List"
import AddressForm from "./Form"

const headers = <>
    <th>GeoCity</th>
    <th>ContactsRest</th>
    <th>ContactsRemarks</th>
</>

const row = entity => <>
    <td>
        <div>{entity?.geoCityName}</div>
        <small>{entity?.geoCountryName}</small>
    </td>
    <td>
        {entity?.rest}
    </td>
    <td>
        {entity?.remarks}
    </td>
</>

const Addresses = props => {

    const { entity } = props

    return <List
        title="ContactsAddresses"
        entityType="Address"
        headers={headers}
        create={AddressForm}
        row={row}
        hasDelete
        {...props}
    />
}

export default Addresses
