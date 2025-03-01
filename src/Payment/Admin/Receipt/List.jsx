import { List } from "List"
import ReceiptCard from "../../Admin/Receipt/Card"
import {
    ReceiptForm,
    Receipts as ReceiptsCommon,
} from "PaymentCommon"

const Receipts = props => {
    return <ReceiptsCommon
        entityType="Receipt"
        card={ReceiptCard}
        create={ReceiptForm}
        hasDelete
        hasEdit
    />
}

export default Receipts
