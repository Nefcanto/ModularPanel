import { parseQuery } from "App"
import { Browse } from "List"
import filters from "./Filters"
import headers from "./Headers"
import sorts from "./Sorts"
import row from "./Row"

const AttributeFilter = () => {

    const { fixedGranularity } = parseQuery()

    return <Browse
        choose={entity => entity.id}
        entityType="Attribute"
        filters={filters}
        headers={headers(fixedGranularity)}
        placeholder="AttributesAttribute"
        property="AttributeId"
        required
        row={row(fixedGranularity)}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default AttributeFilter
