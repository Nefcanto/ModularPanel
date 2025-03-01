import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browser"

const RangeManagerField = ({
    choose,
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
        property={property ?? "RangeManagerId"}
        entityType="RangeManager"
        headers={headers}
        filters={filters}
        row={row}
        placeholder={placeholder ?? "PropertiesRangeManager"}
        show={entity => entity.displayName || entity.contactsPersonDisplayName || entity.accountsUserUserName}
        choose={entity => handleChoose(entity)}
    />
}

export default RangeManagerField
