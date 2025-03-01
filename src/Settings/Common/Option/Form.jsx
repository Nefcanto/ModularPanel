import {
    DialogForm,
    Text,
} from "Form"

const inputs = <>
    <Text
        placeholder="InfraValue"
        property="Value"
    />
</>

const OptionForm = () => {
    return <DialogForm
        entityType="SettingOption"
        humanReadableEntityType="InfraOption"
        inputs={inputs}
    />
}

export default OptionForm
