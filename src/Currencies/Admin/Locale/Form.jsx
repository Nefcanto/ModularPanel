import {
    Check,
    DialogForm,
} from "Form"
import { CurrencyField } from "Currencies"

const inputs = entity => <>
    <CurrencyField />
    <Check
        placeholder="CurrenciesIsDefault"
        property="IsDefault"
    />
</>

const LocaleCurrencyForm = () => {
    return <DialogForm
        title="CurrenciesLocaleCurrency"
        entityType="LocaleCurrency"
        inputs={inputs}
    />
}

export default LocaleCurrencyForm
