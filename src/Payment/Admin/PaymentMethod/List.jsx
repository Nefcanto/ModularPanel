import {
    BooleanProperty,
    List,
} from "List"
import PaymentMethodForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th superAdmin>PaymentAvailableForAdmin</th>
    <th>InfraIsActive</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <BooleanProperty
        actionUrl={`/paymentMethod/toggleBoolean?id=${entity.id}&property=IsEnabled`}
        superAdmin
        value={entity.isEnabled}
    />
    <BooleanProperty
        actionUrl={`/paymentMethod/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />

</>

const PaymentMethods = () => {
    return <List
        entityType="PaymentMethod"
        headers={headers}
        row={row}
        title="PaymentPaymentMethods"
        create={PaymentMethodForm}
    />
}

export default PaymentMethods
