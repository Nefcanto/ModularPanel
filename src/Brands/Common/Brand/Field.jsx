import { Browse } from "Form"
import sorts from "./Sorts"
import headers from "./Headers"
import row from "./BrowseRow"

const BrandField = () => {
    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Brand"
        headers={headers}
        placeholder="BrandsBrand"
        property="Brand"
        row={row}
        show={entity => entity.originalName}
        sorts={sorts}
    />
}

export default BrandField
