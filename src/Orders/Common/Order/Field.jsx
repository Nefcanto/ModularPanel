import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browse"

const OrderField = ({
    choose,
    identifyingProperty,
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
        property={property ?? "OrderIdentifier"}
        entityType="Order"
        filters={filters}
        headers={headers}
        row={row}
        placeholder={placeholder || "OrderOrder"}
        show={entity => entity.number}
        identifyingProperty={identifyingProperty}
        choose={entity => handleChoose(entity)}
        required
    />
}

export default OrderField
