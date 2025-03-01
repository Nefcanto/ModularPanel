import {
    DialogForm,
    Text,
} from "Form"
import { GeoFields } from "GeoCommon"

const inputs = <>
    <GeoFields />
    <Text
        property="Rest"
        placeholder="ContactsRest"
    />
    <Text
        property="Remarks"
        placeholder="ContactsRemarks"
    />
</>

const AddressForm = props => {
    return <DialogForm
        entityType="Address"
        humanReadableEntityType="ContactsAddress"
        inputs={inputs}
        {...props}
    />
}

export default AddressForm
