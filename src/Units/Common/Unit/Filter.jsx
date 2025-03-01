import { Browse } from "List"
import filters from "./Filters"
import headers from "./Headers"
import sorts from "./Sorts"
import row from "./Row"

const UnitFilter = props => {
    return <Browse
        entityType="Unit"
        property="Unit"
        placeholder="UnitsUnit"
        required
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        show={entity => entity.title}
        choose={entity => entity.key}
        byKey
        {...props}
    />
}

export default UnitFilter
