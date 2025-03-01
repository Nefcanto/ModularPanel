import {
    DialogForm,
    Text,
} from "Form"

const inputs = <>
    <Text
        placeholder="InfraTranslation"
        property="Translation"
    />
</>

const StructureForm = <DialogForm
    entityType="Structure"
    humanReadableEntityType="AggregatesStructure"
    inputs={inputs}
/>

export default StructureForm
