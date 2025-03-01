import {
    BooleanProperty,
    Image,
    List,
} from "List"
import { NewSetPrice } from "Pricing"
import ShipmentMethodForm from "./Form"

const headers = <>
    <th></th>
    <th>InfraTitle</th>
    <th superAdmin>InfraIsEnabled</th>
    <th>InfraIsActive</th>
</>

const row = entity => <>
    <Image />
    <td>{entity.title}</td>
    <BooleanProperty
        actionUrl={`/shipmentMethod/toggleBoolean?id=${entity.id}&property=IsEnabled`}
        superAdmin
        value={entity.isEnabled}
    />
    <BooleanProperty
        actionUrl={`/shipmentMethod/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
</>

const entityActions = entity => <>
    <NewSetPrice />
</>

const ShipmentMethod = () => {
    return <List
        create={ShipmentMethodForm}
        entityActions={entityActions}
        entityType="ShipmentMethod"
        headers={headers}
        row={row}
        title="ShipmentShipmentMethods"
    />
}

export default ShipmentMethod
