import { EntityAttributePageForm } from "Attributes"

const TierAttributeForm = () => {

    return <EntityAttributePageForm
        breadcrumbItems={[
            {
                title: "SubscriptionsTiers",
                link: "/tiers"
            }
        ]}
    />
}

export default TierAttributeForm
