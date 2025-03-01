import {
    DialogForm,
    LongText,
    Title,
} from "Form"
// import { GranularityField } from "Granularities"
import { DataTypeField } from "DataTypes"
import { ScopeField } from "ScopesCommon"

const inputs = <>
    {/* <GranularityField /> */}
    <Title />
    <DataTypeField />
    <ScopeField />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
</>

const SettingForm = <DialogForm
    entityType="Setting"
    humanReadableEntityType="SettingsSetting"
    inputs={inputs}
/>

export default SettingForm
