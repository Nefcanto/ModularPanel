import { parseQuery } from "App"
import { Browse } from "Form"
import filters from "./Filters"
import headers from "./Headers"
import sorts from "./Sorts"
import row from "./Row"

const AttributeField = ({ onChange }) => {

    const { fixedGranularity } = parseQuery()

    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Attribute"
        filters={filters}
        headers={headers(fixedGranularity)}
        onChange={onChange}
        placeholder="AttributesAttribute"
        property="Attribute"
        required
        row={row(fixedGranularity)}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default AttributeField
