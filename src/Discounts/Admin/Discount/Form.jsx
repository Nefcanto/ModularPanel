import {
    DialogForm,
    Title,
} from "Form"
import { GranularityField } from "Granularities"

const inputs = <>
    <GranularityField />
    <Title />
</>

const DiscountForm = <DialogForm
    entityType="Discount"
    humanReadableEntityType="DiscountsDiscount"
    inputs={inputs}
/>

export default DiscountForm
