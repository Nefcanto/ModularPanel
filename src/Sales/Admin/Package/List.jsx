import {
    EnumProperty,
    List,
    Text,
} from "List"

const filters = <>
    <Text
        property="ContactsPersonDisplayName"
        placeholder="AccountUser"
    />
    <Text
        property="OrdersOrderNumber"
        placeholder="OrdersOrderNumber"
    />
</>

const headers = <>
    <th>AccountsUser</th>
    <th>OrdersOrderNumber</th>
    <th>InfraState</th>
</>

const row = entity => {

    const styleProvider = enumKey => {
        switch (enumKey) {
            case "processing":
                return "bg-yellow-400"
            case "ready":
                return "bg-green-400"
            case "shipped":
                return "bg-blue-300"
            case "delivered":
                return "bg-blue-600"
            case "cancelled":
                return "bg-gray-400"
            case "returned":
                return "bg-orange-600"
            case "Processing":
                return "bg-yellow-400"
            case "Ready":
                return "bg-green-400"
            case "Shipped":
                return "bg-blue-300"
            case "Delivered":
                return "bg-blue-600"
            case "Cancelled":
                return "bg-gray-400"
            case "Returned":
                return "bg-orange-600"
            default:
                return ""
        }
    }

    return <>
        <td>{entity.contactsPersonDisplayName}</td>
        <td>{entity.ordersOrderNumber}</td>
        <EnumProperty
            actionUrl={`/package/changeState/${entity.id}`}
            currentKey={entity.relatedItems.stateKey}
            currentStyle={styleProvider(entity.relatedItems.stateKey)}
            enumeration="PackageState"
            property="StateId"
            styleProvider={styleProvider}
        />
    </>
}

const entityActions = entity => <>
</>

const Packages = () => {
    return <List
        title="SalesPurchaseRecords"
        entityType="Package"
        filters={filters}
        headers={headers}
        row={row}
        hasEdit
        entityActions={entityActions}
    />
}

export default Packages
