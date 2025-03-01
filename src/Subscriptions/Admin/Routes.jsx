import Subscribers from "./Subscriber/List"
import TierAttributeForm from "./Tier/Attribute"
import Tiers from "./Tier/List"

const SubscriptionsRoutes = [
    {
        path: "/subscribers",
        component: Subscribers
    },
    {
        path: "/tiers",
        component: Tiers
    },
    {
        path: "/tier/attribute",
        component: TierAttributeForm
    },
]

export default SubscriptionsRoutes
