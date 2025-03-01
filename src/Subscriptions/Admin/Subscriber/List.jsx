import {
    DateTime,
    List,
    Text,
} from "List"
import SubscriberFrom from "./Form"

const filters = <>
    <Text
        property="ContactsPersonDisplayName"
        placeholder="SubscriptionsPersonDisplayName"
    />
</>

const headers = <>
    <th>SubscriptionsPersonDisplayName</th>
    <th>InfraStartDate</th>
    <th>InfraEndDate</th>
</>

const row = entity => {

    return <>
        <td>{entity.contactsPersonDisplayName}</td>
        <td>
            <DateTime date={entity.startUtcDate} />
        </td>
        <td>
            <DateTime date={entity.endUtcDate} />
        </td>
    </>
}

const Subscribers = () => {

    return <List
        title="SubscriptionsSubscribers"
        entityType="Subscriber"
        filters={filters}
        headers={headers}
        row={row}
        create={SubscriberFrom}
        hasEdit
    />

}

export default Subscribers
