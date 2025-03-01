import {
    DialogForm,
    Text,
} from "Form"
import { DataTypeField } from "DataTypes"

const inputs = <>
    <Text
        placeholder="InfraName"
        property="Name"
    />
    <Text
        placeholder="InfraTranslation"
        property="Translation"
    />
    <DataTypeField />
</>

const ParameterForm = <DialogForm
    entityType="AggregateParameter"
    humanReadableEntityType="InfraParameter"
    inputs={inputs}
/>

export default ParameterForm
