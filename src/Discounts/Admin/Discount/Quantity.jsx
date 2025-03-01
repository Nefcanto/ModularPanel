import {
    AmountOrPercent,
    DialogForm,
    Percent,
} from "Form"
import { PriceField } from "Pricing"

const price = <PriceField
    entity={{}}
    placeholder="PricingAmount"
    property="Quantity"
/>

const percent = <Percent
    placeholder="InfraPercent"
    property="Quantity"
    required
/>

const inputs = <>
    <AmountOrPercent
        amountControl={price}
        percentControl={percent}
        percentProperty="IsPercentage"
    />
</>

const QuantityDialog = <DialogForm
    entityType="Discount"
    inputs={inputs}
    title="InfraQuantity"
/>

export default QuantityDialog
