import {
    Check,
    PageForm,
} from "Form"
import LocaleField from "./Locale/Field"

const inputs = <>
    <div>Entity filed</div>
    <LocaleField
        property="FromLocale"
        placeholder="GlobalizationFromLocale"
    />
    <LocaleField
        property="ToLocale"
        placeholder="GlobalizationToLocale"
    />
    <Check
        property="Override"
        placeholder="GlobalizationOverride"
        multi
    />
</>

const Translate = () => {
    return <PageForm
        title="GlobalizationTranslate"
        entityType=""
        inputs={inputs}
    />
}

export default Translate
