import {
    Check,
    DialogForm,
    Key,
    Text,
} from "Form"

const inputs = <>
    <Key />
    <Text
        property="Name"
        placeholder="InfraName"
        required
    />
    <Check
        property="IsActive"
        placeholder="InfraActive"
        initialValue={true}
    />
</>

const SectionForm = () => {
    return <DialogForm
        entityType="Section"
        humanReadableEntityType="ContentsSection"
        inputs={inputs}
    />
}

export default SectionForm
