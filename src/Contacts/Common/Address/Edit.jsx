import {
    DialogForm,
    Text,
    View,
} from "Form"

const inputs = <>
    <View
        placeholder="Country"
        property="GeoCountryName"
    />
    <View
        placeholder="City"
        property="GeoCityName"
    />
    <Text
        property="Rest"
        placeholder="Rest"
    />
    <Text
        property="Remarks"
        placeholder="Remarks"
    />
</>

const AddressEditForm = props => {
    return <DialogForm
        entityType="Address"
        inputs={inputs}
        {...props}
    />
}

export default AddressEditForm
