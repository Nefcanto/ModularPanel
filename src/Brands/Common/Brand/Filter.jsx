import { Browse } from "List"
import sorts from "./Sorts"
import headers from "./Headers"
import row from "./BrowseRow"

const BrandFilter = props => <Browse
    autocomplete
    byKey
    choose={entity => entity.key}
    entityType="Brand"
    headers={headers}
    image={entity => entity.relatedItems.logoUrl}
    placeholder="BrandsBrand"
    property="Brand"
    row={row}
    show={entity => `${entity.localizedName} - ${entity.originalName}`}
    sorts={sorts}
    {...props}
/>

export default BrandFilter
