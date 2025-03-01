import { Browse } from "Form"
import headers from "./Headers"
import Row from "./Row"

const WarehouseField = () => {
    return <Browse
        byGuid
        choose={entity => entity.guid}
        entityType="Warehouse"
        headers={headers}
        placeholder="InventoryWarehouse"
        property="Warehouse"
        row={Row}
        show={entity => entity.title}
        required
    />
}

export default WarehouseField
