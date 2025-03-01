import { Browse } from "Form"
import {
    headers,
    row
} from "./Browse"

const PersonField = ({
    byGuid,
    choose,
    identifyingProperty,
    placeholder,
    property,
    required
}) => {

    const handleChoose = entity => {
        if (choose) {
            return choose(entity)
        }
        return entity.guid
    }

    return <Browse
        property={property ?? "PersonGuid"}
        placeholder={placeholder ?? "ContactsPerson"}
        entityType="Person"
        headers={headers}
        row={row}
        show={entity => entity.displayName}
        choose={entity => handleChoose(entity)}
        identifyingProperty={identifyingProperty}
        byGuid={byGuid}
        required={required}
    />
}

export default PersonField
