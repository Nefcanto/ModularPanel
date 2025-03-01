import {
    Browse,
    filterOperator,
} from "List"
import {
    filters,
    headers,
    row,
} from "./BrowseList"

const DoerFilter = () => {
    return <Browse
        entityType="Doer"
        operator={filterOperator.containing}
        property="UserGuidsCsv"
        placeholder="TasksDoer"
        filters={filters}
        headers={headers}
        row={row}
        show={entity => entity.naturalPersonName}
        choose={entity => entity.userGuid}
    />
}

export default DoerFilter
