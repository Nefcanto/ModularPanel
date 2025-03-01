import {
    DialogForm,
    Numeric,
    Text,
} from "Form"

const inputs = <>
    <Text
        placeholder="CurrenciesSuperUnitName"
        property="SuperUnitName"
    />
    <Numeric
        placeholder="CurrenciesUnitsPerSuperUnit"
        property="UnitsPerSuperUnit"
    />
</>

const SuperUnitForm = <DialogForm
    entityType="Currency"
    inputs={inputs}
    title="CurrenciesSuperUnit"
/>

export default SuperUnitForm
