import {
    DialogForm,
    Text,
} from "Form"
import { ScopeField } from "Scopes"

const inputs = <>
    <ScopeField />
    <Text
        placeholder="GlobalizationTextKey"
        property="Text"
        regex="[a-zA-Z]+"
        required
    />
    <Text
        placeholder="GlobalizationTranslation"
        property="Value"
        required
    />
</>

const TranslationForm = () => {
    return <DialogForm
        entityType="Translation"
        inputs={inputs}
        title="GlobalizationTranslation"
    />
}

export default TranslationForm
