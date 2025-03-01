import {
    Check,
    Key,
    PageForm,
    Text,
} from "Form"
import { DataTypeField } from "DataTypes"

const inputs = <>
    <Key />
    <DataTypeField />
    <Text
        placeholder="InfraLabel"
        property="Label"
    />
    <Text
        placeholder="FormsPlaceholder"
        property="Placeholder"
    />
    <Text
        placeholder="InfraHint"
        property="Hint"
    />
    <Check
        placeholder="InfraIsRequired"
        property="IsRequired"
    />
    <Text
        placeholder="FormsRegexPattern"
        property="Regex"
    />
    <Text
        placeholder="FormsDefaultValue"
        property="DefaultValue"
    />
</>

const FieldForm = () => {
    return <PageForm
        entityType="Field"
        inputs={inputs}
        module="Forms"
        title="FormsField"
    />
}

export default FieldForm
