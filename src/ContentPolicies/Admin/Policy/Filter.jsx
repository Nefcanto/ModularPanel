import { Browse } from "List"
import filters from "./Filters"
import sorts from "./Sorts"
import headers from "./Headers"
import row from "./Row"

const PolicyFilter = () => {
    return <Browse
        property="PolicyKey"
        entityType="Policy"
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        placeholder="ContentPoliciesPolicy"
        show={entity => entity.title}
        choose={entity => entity.key}
        byKey
    />
}

export default PolicyFilter
