import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browse"

const SupplierField = props => {
    return <Browse
        choose={entity => entity.guid}
        entityType="Supplier"
        filters={filters}
        headers={headers}
        placeholder="InventorySupplier"
        property="Supplier"
        row={row}
        show={entity => entity.displayName}
        {...props}
    />
}

export default SupplierField
