import { List } from "List"
import StockForm from "./Form"

const headers = <>
    <th>InventoryWarehouse</th>
    <th>InventorySupplier</th>
    <th>InfraQuantity</th>
</>

const row = entity => <>
    <td>{entity.contactsContactTitle}</td>
    <td>{entity.inventorySupplierDisplayName}</td>
    <td>{entity.quantity}</td>
</>

const Stocks = () => {
    return <List
        create={StockForm}
        entityType="Stock"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="InventoryStocks"
    />
}

export default Stocks
