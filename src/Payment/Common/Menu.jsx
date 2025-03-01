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
                path: "/paymentMethods"
            },
            {
                title: "PaymentGateways",
                icon: AccountBalanceIcon,
                path: "/gateways"
            },
            {
                title: "PaymentTransactions",
                path: "/transactions"
            }
        ]
    }
]

export default PaymentMenu
