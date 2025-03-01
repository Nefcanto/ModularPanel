import {
    DialogForm,
    Key,
    Text,
} from "Form"
import { DataTypeField } from "DataTypes"

const inputs = <>
    <Key />
    <Text
        property="Name"
        placeholder="InfraName"
        required
    />
    <DataTypeField />
</>

const SectionPartForm = () => {
    return <DialogForm
        entityType="SectionPart"
        humanReadableEntityType="ContentsSectionPart"
        inputs={inputs}
    />
}

export default SectionPartForm
