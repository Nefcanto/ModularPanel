import {
    DialogForm,
    Key,
    Slug,
    Text,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Text
        property="Name"
        placeholder="InfraName"
    />
</>

const DealTypeForm = props => {
    return <DialogForm
        {...props}
        humanReadableEntityType="PropertiesDealType"
        entityType="AdminDealType"
        inputs={inputs}
    />
}

export default DealTypeForm
