import { Browse } from "Form"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"

const LinkGroupField = () => {

    return <Browse
        byGuid
        choose={entity => entity.guid}
        entityType="LinkGroup"
        filters={filters}
        headers={headers}
        placeholder="SeoLinkGroup"
        property="LinkGroup"
        required
        row={row}
        show={entity => entity.title}
    />
}

export default LinkGroupField
