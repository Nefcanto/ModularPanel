import {
    DateTime,
    Enum,
    EnumProperty,
    List,
} from "List"

const filters = <>
    <Enum
        property="SubscriptionTypeId"
        placeholder="SubscriptionsSubscriptionType"
        entityType="SubscriptionType"
    />
</>

const headers = <>
    <th>SubscriptionsPersonDisplayName</th>
    <th>InfraDate</th>
    <th>SubscriptionsSubscriptionType</th>
</>

const row = entity => {

    const styleProvider = (enumKey) => {
        switch (enumKey) {
            case "subscription":
                return "bg-green-400"
            case "renewal":
                return "bg-green-400"
            case "cancellation":
                return "bg-red-400 text-white"
            case "expiration":
                return "bg-yellow-400"
        }
    }

    return <>
        <td>{entity.ContactsPersonDisplayName}</td>
        <DateTime date={entity.utcDate} />
        <EnumProperty
            actionUrl={`/subscriber/changeType/${entity.id}`}
            currentKey={entity.relatedItems.subscriptionTypeKey}
            currentStyle={styleProvider(entity.relatedItems.subscriptionTypeKey)}
            enumeration="SubscriptionType"
            property="SubscriptionTypeId"
            styleProvider={styleProvider}
        />
    </>
}

const SubscriptionHistories = () => {

    return <List
        title="SubscriptionsSubscriptionHistories"
        entityType="Subscriber"
        filters={filters}
        headers={headers}
        row={row}
    />

}

export default SubscriptionHistories
