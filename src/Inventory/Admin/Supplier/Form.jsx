import { JuridicalPersonForm } from "Contacts"
import app from "App"

const SupplierForm = () => {
    return <JuridicalPersonForm
        entityType="Supplier"
        title={app.t("InventoryCreateSupplier")}
    />
}

export default SupplierForm
