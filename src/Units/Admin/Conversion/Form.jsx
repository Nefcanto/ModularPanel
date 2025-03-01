import {
    DialogForm,
    Text,
} from "Form"
import { UnitField } from "UnitsCommon"

const inputs = <>
    <UnitField property="FromUnit" />
    <UnitField property="ToUnit" />
    <Text
        property="Formula"
        placeholder="UnitsFormula"
        required
    />
</>

const ConversionForm = <DialogForm
    entityType="Conversion"
    humanReadableEntityType="UnitsConversion"
    inputs={inputs}
/>

export default ConversionForm
