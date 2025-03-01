import {
    DialogForm,
    Hidden,
    Title,
} from "Form"
import ProductField from "./Field"

const inputs = entity => <>
    <ProductField property="EntityGuid" />
    <Title />
    <Hidden
        property="EntityType"
        value="Product"
    />
    <Hidden
        property="TypeId"
        value={1}
    />
    <Hidden
        property="MainEntityGuid"
        value={entity.guid}
    />
    <Hidden
        property="MainEntityType"
        value="product"
    />
</>

const BundleDialog = () => {
    return <DialogForm
        entityType="‌Bundle"
        title="ProductsChooseProduct"
        inputs={inputs}
        submitTo="/bundledItem/create"
    />
}

export default BundleDialog
