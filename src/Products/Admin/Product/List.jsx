import {
    List,
    TitleSort,
} from "List"
import {
    filters,
    ProductForm,
} from "ProductsCommon"
import EntityActions from "./EntityActions"
import Row from "./Row"
import headers from "./Headers"
import card from "./Card"
import listActions from "./ListActions"

const Products = () => {
    return <List
        card={card}
        entityActions={EntityActions}
        entityType="Product"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        listActions={listActions}
        module="Products"
        row={Row}
        separateRowForActions
        sorts={[...TitleSort]}
        title="ProductsProducts"
        upsert={ProductForm}
    />
}

export default Products
