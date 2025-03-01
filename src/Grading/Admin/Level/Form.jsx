import {
    DialogForm,
    Text,
    Title,
} from "Form"
import { UnitField } from "UnitsCommon"

const inputs = <>
    <Title />
    <UnitField />
    <Text
        property="FromQuantity"
        placeholder="GradingFrom"
    />
    <Text
        property="ToQuantity"
        placeholder="GradingTo"
    />
</>

const LevelForm = <DialogForm
    entityType="Level"
    humanReadableEntityType="GradingLevel"
    inputs={inputs}
/>

export default LevelForm
