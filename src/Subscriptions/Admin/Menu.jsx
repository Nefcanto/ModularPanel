import SubscriptionsIcon from "@mui/icons-material/Subscriptions"

const SubscriptionsMenu = [
    {
        title: "SubscriptionsSubscriptions",
        icon: SubscriptionsIcon,
        children: [
            {
                title: "SubscriptionsSubscribers",
                path: "/subscribers"
            },
            {
                title: "SubscriptionsChurnRates",
                path: "/churnRates"
            },
            {
                title:"SubscriptionsTier",
                path:"/tiers"
            }
        ]
    }
]

export default SubscriptionsMenu
