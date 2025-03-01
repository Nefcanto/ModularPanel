import {
    DialogForm,
    Key,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Title />
</>

const LevelForm = <DialogForm
    entityType="PricingLevel"
    humanReadableEntityType="PricingPriceLevel"
    inputs={inputs}
/>

export default LevelForm
