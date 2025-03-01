import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browse"

const LevelField = ({
    identifyingProperty,
    property,
}) => {

    return <Browse
        property={property ?? "LevelGuid"}
        placeholder="GradingLevel"
        entityType="Level"
        filters={filters}
        headers={headers}
        row={row}
        show={entity => `${entity.title}-${entity.skill}`}
        choose={entity => entity.guid}
        identifyingProperty={identifyingProperty}
        byGuid
        required
    />
}

export default LevelField
