import { Browse } from "List"
import headers from "./Headers"
import sorts from "./Sorts"
import row from "./Row"

const TagFilter = ({
    choose,
    property,
    show,
}) => <Browse
        choose={entity => choose ? choose(entity) : entity.key}
        entityType="Tag"
        headers={headers}
        placeholder="NewTaxonomyTag"
        property={property || "Tag"}
        row={row}
        show={entity => show ? show(entity) : entity.title}
        sorts={sorts}
    />

export default TagFilter
