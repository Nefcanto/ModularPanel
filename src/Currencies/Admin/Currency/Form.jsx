import {
    DialogForm,
    Text,

} from "Form"

const inputs = <>
    <Text
        placeholder="InfraName"
        property="Name"
        required
    />
    <Text
        placeholder="CurrenciesIsoCode"
        property="IsoCode"
        required
    />
    <Text
        placeholder="CurrenciesUnitName"
        property="UnitName"
        required
    />
    <Text
        placeholder="CurrenciesSymbol"
        property="SymbolCharacter"
        required
    />
</>

const CurrencyForm = <DialogForm
    entityType="Currency"
    humanReadableEntityType="CurrenciesCurrency"
    inputs={inputs}
/>

export default CurrencyForm
