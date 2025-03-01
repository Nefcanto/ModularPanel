import {
    DialogForm,
    Numeric,
} from "Form"
import WarehouseField from "../Warehouse/Field"
import { SupplierField } from "InventoryCommon"

const inputs = <>
    <WarehouseField />
    <SupplierField />
    <Numeric
        placeholder="InfraQuantity"
        property="Quantity"
        realNumbers
        required
    />
</>

const StockForm = <DialogForm
    entityType="Stock"
    help="StockForm"
    humanReadableEntityType="InventoryStock"
    inputs={inputs}
/>

export default StockForm
