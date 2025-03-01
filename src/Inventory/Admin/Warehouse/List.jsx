import { List } from "List"
import WarehouseForm from "./Form"
import EntityActions from "./EntityActions"
import Headers from "./Headers"
import Row from "./Row"

const Warehouses = () => {
    return <List
        create={WarehouseForm}
        entityActions={EntityActions}
        entityType="AdminWarehouse"
        hasDelete
        hasEdit
        headers={Headers}
        row={Row}
        title="InventoryWarehouses"
    />
}

export default Warehouses
