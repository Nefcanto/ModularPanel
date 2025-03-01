import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import { EntityAction } from "List"

const OrderReceipts = ({
    orderGuid,
    ...rest
}) => {
    return <EntityAction
        title="PaymentReceipts"
        icon={ReceiptLongIcon}
        goTo={`/payment/receipts?orderGuid=${orderGuid}`}
        {...rest}
    />
}

export default OrderReceipts
