import {
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
</>

const StrategyForm = <DialogForm
    entityType="Strategy"
    humanReadableEntityType="PricingStrategy"
    inputs={inputs}
/>

export default StrategyForm
