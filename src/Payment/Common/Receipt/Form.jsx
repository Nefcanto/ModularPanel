import { parseQuery } from "App"
import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from "Form"

const ReceiptForm = ({ entity }) => {

    const { orderGuid } = parseQuery()

    const inputs = entity => <>
        <Text
            placeholder="PaymentOwnerName"
            property="OwnerName"
            required
        />
        <Text
            placeholder="PaymentMethod"
            property="Method"
        />
        <Text
            placeholder="PaymentBank"
            property="Bank"
            required
        />
        <Text
            placeholder="PaymentBranchName"
            property="BranchName"
        />
        <Text
            placeholder="PaymentBranchCode"
            property="BranchCode"
        />
        <Numeric
            placeholder="PaymentAmount"
            property="Amount"
            required
        />
        <DateTime
            placeholder="InfraDate"
            property="Date"
            required
        />
        <Text
            placeholder="PaymentReferenceNumber"
            property="ReferenceNumber"
        />
        <Text
            placeholder="PaymentTrackingNumber"
            property="TrackingNumber"
            required
        />
        <LongText
            placeholder="PaymentNote"
            property="Note"
        />
    </>
    return <DialogForm
        entityType="Receipt"
        inputs={inputs}
        title="PaymentCreateReceipt"
    />
}

export default ReceiptForm
