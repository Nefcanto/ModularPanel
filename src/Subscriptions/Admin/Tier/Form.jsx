import {
    DialogForm,
    LongText,
    Text,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Text
        property="Supertitle"
        placeholder="InfraSupertitle"
    />
    <Text
        property="Subtitle"
        placeholder="InfraSubtitle"
    />
    <LongText
        property="Description"
        placeholder="InfraDescription"
    />
</>

const TierForm = () => {

    return <DialogForm
        entityType="Tier"
        humanReadableEntityType="SubscriptionsTier"
        inputs={inputs}

    />
}

export default TierForm
