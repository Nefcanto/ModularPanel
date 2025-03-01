import { Lookup } from "Form"

const LocaleField = props => {
    return <Lookup
        property="LocaleGuid"
        entityType="Locale"
        placeholder="GlobalizationLocale"
        required="GlobalizationLocaleRequired"
        display={locale => locale.localKey}
        choose={locale => locale.id}
        radio
        row
        {...props}
    />
}

export default LocaleField
