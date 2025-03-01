import {
    DialogForm,
    Numeric,
    Text,
} from "Form"

const inputs = <>
    <Text
        placeholder="CurrenciesSubunitName"
        property="SubunitName"
    />
    <Numeric
        placeholder="CurrenciesSubunitsPerUnit"
        property="SubunitsPerUnit"
    />
</>

const SubunitForm = <DialogForm
    entityType="Currency"
    inputs={inputs}
    title="CurrenciesSubunit"
/>

export default SubunitForm
