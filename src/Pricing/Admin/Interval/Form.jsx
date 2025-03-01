import {
    DialogForm,
    Numeric,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Numeric
        property="DaysInInterval"
        placeholder="PricingDaysInInterval"
        required
    />
</>

const IntervalForm = <DialogForm
    entityType="Interval"
    humanReadableEntityType="PricingInterval"
    inputs={inputs}
/>

export default IntervalForm
