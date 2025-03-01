import {
    Browse,
    filterOperator,
} from "List"
import sorts from "./Sorts"
import headers from "./Headers"
import row from "./Row"

const CategoryFilter = props => <Browse
    byKey
    choose={entity => entity.key}
    entityType="Category"
    headers={headers}
    operator={filterOperator.containing}
    isTree
    placeholder="NewTaxonomyCategory"
    property="TaxonomyCsvsCategoryPaths"
    row={row}
    show={entity => entity.title}
    sorts={sorts}
    {...props}
/>

export default CategoryFilter
