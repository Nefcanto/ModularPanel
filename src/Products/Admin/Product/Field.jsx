import { Browse } from "Form"
import {
    headers,
    row
} from "./Browse"

const ProductField = props => {
    return <Browse
        property="ProductId"
        entityType="Product"
        headers={headers}
        row={row}
        placeholder="ProductsProduct"
        show={entity => entity.title}
        choose={entity => entity.guid}
        {...props}
    />
}

export default ProductField
