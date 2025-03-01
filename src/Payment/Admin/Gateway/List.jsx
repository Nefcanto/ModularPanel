import { List } from "List"
import GatewayForm from "./Form"
import Row from "./Row"
import headers from "./Headers"
import listActions from "./ListActions"
import { AssignSettings } from "Settings"

const entityActions = entity => <>
    <AssignSettings />
</>

const Gateways = ({
    isSuperAdmin
}) => {
    return <List
        create={isSuperAdmin && GatewayForm}
        entityActions={entityActions}
        entityType="Gateway"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        listActions={listActions}
        row={Row}
        title="PaymentGateways"
    />
}

export default Gateways
