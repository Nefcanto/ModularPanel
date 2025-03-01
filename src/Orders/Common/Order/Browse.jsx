import {
    Enum,
    EnumProperty,
    Text,
} from "List"

const filters = <>
    <Text
        placeholder="OrdersOrderNumber"
        property="OrderNumber"
    />
    <Text
        placeholder="ContactsName"
        property="ContactsPersonDisplayName"
    />
    <Enum
        entityType="OrderType"
        placeholder="InfraType"
        property="Type"
    />
</>

const headers = <>
    <th>OrdersOrderNumber</th>
    <th>InfraType</th>
    <th>ContactsName</th>
</>

const styleProvider = typeKey => {
    switch (typeKey) {
        case "adhocInvoice":
            return "bg-green-200 p-2 w-full h-full"
        case "invoice":
            return "bg-blue-200 p-2 w-full h-full"
        case "proforma":
            return "bg-yellow-200 p-2 w-full h-full"
        case "cart":
            return "bg-gray-200 p-2 w-full h-full"
        default:
            break
    }
}

const row = entity => <>
    <td>{entity.number}</td>
    <EnumProperty
        currentKey={entity.relatedItems.typeKeyTranslation}
        currentStyle={styleProvider(entity.relatedItems.typeKey)}
        enumeration="OrderType"
        property="Type"
        styleProvider={styleProvider}
    />
    <td>
        {entity.contactsPersonDisplayName}
    </td>
</>

export { filters }
export { headers }
export { row }
