import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browser"

const EmployeeField = ({
    choose,
    placeholder,
    property,
    ...rest
}) => {
    const handleChoose = entity => {
        if (choose) {
            return choose(entity)
        }
        return entity.id
    }
    return <Browse
        property={property ?? "EmployeeId"}
        placeholder={placeholder ?? "OrganizationEmployee"}
        entityType="Employee"
        headers={headers}
        filters={filters}
        row={row}
        show={entity => entity.displayName || entity.accountsUserUserName}
        choose={entity => handleChoose(entity)}
        {...rest}
    />
}

export default EmployeeField
