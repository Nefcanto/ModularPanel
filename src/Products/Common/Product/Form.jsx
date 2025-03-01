import { DialogForm } from "Form"
import Inputs from "./Inputs"

const ProductForm = ({
    entityType,
    title,
}) => {
    return <DialogForm
        title={title ?? "ProductsProduct"}
        entityType={entityType ?? "Product"}
        inputs={Inputs}
    />
}

export default ProductForm
