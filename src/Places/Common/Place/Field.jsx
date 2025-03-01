import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browser"

const PlaceField = ({
    choose,
    entityType,
    placeholder,
    property,
}) => {
    const handleChoose = entity => {
        if (choose) {
            return choose(entity)
        }
        return entity.id
    }
    return <Browse
        byGuid
        choose={entity => handleChoose(entity)}
        entityType={entityType ?? "Place"}
        filters={filters}
        headers={headers}
        placeholder={placeholder ?? "PlacesPlace"}
        property={property ?? "PlaceId"}
        required
        row={row}
        show={entity => entity.title}
    />
}

export default PlaceField
