import CreditScoreIcon from "@mui/icons-material/CreditScore"
import PaymentIcon from "@mui/icons-material/Payment"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"

const PaymentMenu = [
    {
        title: "PaymentPayment",
        icon: PaymentIcon,
        children: [
            {
                title: "PaymentMethods",
                icon: CreditScoreIcon,
                path: "/payment/paymentMethods"
            },
            {
                title: "PaymentGateways",
                icon: AccountBalanceIcon,
                path: "/payment/gateways"
            },
            {
                title: "PaymentTransactions",
                path: "/payment/transactions"
            }
        ]
    }
]

export default PaymentMenu
