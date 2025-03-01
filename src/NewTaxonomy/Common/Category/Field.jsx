import { Browse } from "Form"
import headers from "./Headers"
import sorts from "./Sorts"
import row from "./Row"

const CategoryField = ({
    choose,
    property,
    show,
}) => <Browse
        choose={entity => choose ? choose(entity) : entity.key}
        entityType="Category"
        headers={headers}
        isTree
        placeholder="NewTaxonomyCategory"
        property={property || "Category"}
        required
        row={row}
        show={entity => show ? show(entity) : entity.title}
        sorts={sorts}
    />

export default CategoryField
