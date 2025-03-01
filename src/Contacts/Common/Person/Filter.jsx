import { Browse } from "List"
import headers from "./Headers"
import row from "./Row"

const PersonFilter = ({
    property
}) => {
    return <Browse
        autocomplete
        byGuid
        choose={entity => entity.guid}
        entityType="Person"
        headers={headers}
        placeholder="ContactsPerson"
        property={property ?? "Person"}
        row={row}
        show={entity => entity.displayName}
    />
}

export default PersonFilter
