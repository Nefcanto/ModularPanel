import PersonIcon from "@mui/icons-material/Person"

const SalesMenu = [
    {
        title: "SalesSales",
        icon: PersonIcon,
        children: [
            {
                title: "SalesPurchaseRecords",
                path: "/packages"
            },
            {
                title: "SalesAdditionTypes",
                path: "/additionTypes"
            },
            {
                title: "SalesReductionTypes",
                path: "/reductionTypes"
            }
        ]
    }
]

export default SalesMenu
