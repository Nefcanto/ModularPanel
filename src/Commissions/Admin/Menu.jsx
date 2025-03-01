import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"

const CommissionsMenu = [
    {
        title: "Commissions",
        icon: CurrencyExchangeIcon,
        children: [
            {
                title: "CommissionsPersonCommissionDefault",
                path: "/personCommissionDefaults"
            },
            {
                title: "CommissionsReason",
                path: "/reasons"
            }
        ]
    }
]

export default CommissionsMenu
