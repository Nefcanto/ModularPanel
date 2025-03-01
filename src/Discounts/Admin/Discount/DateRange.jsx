import {
    Check,
    DateTime,
    DialogForm,
} from "Form"

const inputs = <>
    <DateTime
        placeholder="InfraStartDate"
        property="StartDate"
    />
    <Check
        placeholder="InfraHasEndDate"
        toggle="HasEndDate"
    />
    <DateTime
        placeholder="InfraEndDate"
        property="EndDate"
        showIf="HasEndDate"
    />
</>

const DateRangeDialog = <DialogForm
    entityType="Discount"
    inputs={inputs}
    title="InfraDateRange"
/>

export default DateRangeDialog
