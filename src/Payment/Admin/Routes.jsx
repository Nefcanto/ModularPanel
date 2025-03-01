import Gateways from "./Gateway/List"
import PaymentMethods from "./PaymentMethod/List"
import Receipts from "./Receipt/List"
import Transactions from "./Transaction/List"

const PaymentRoutes = [
    {
        path: "/payment/paymentMethods",
        component: PaymentMethods
    },
    {
        path: "/payment/transactions",
        component: Transactions
    },
    {
        path: "/payment/gateways",
        component: Gateways
    },
    {
        path: "/payment/receipts",
        component: Receipts
    }
]

export default PaymentRoutes
