import {
    List,
    Text,
} from "List"
import { EditPerson } from "Contacts"
import InventoryForm from "./Form"
import Headers from "./Headers"
import Row from "./Row"

const filters = <>
    <Text
        property="NaturalPersonName"
        placeholder="InventorySupplier"
    />
</>

const entityActions = <>
    <EditPerson />
</>

const Suppliers = () => {
    return <List
        title="InventorySuppliers"
        entityType="Supplier"
        filters={filters}
        headers={Headers}
        row={Row}
        entityActions={entityActions}
        create={InventoryForm}
        hasDelete
    />
}

export default Suppliers
