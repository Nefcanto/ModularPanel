import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browse"

const DepartmentField = ({
    identifyingProperty,
    property,
}) => {

    return <Browse
        property={property ?? "DepartmentKey"}
        placeholder="OrganizationDepartment"
        entityType="Department"
        filters={filters}
        headers={headers}
        row={row}
        show={entity => `${entity.title}`}
        choose={entity => entity.key}
        identifyingProperty={identifyingProperty}
        byKey
        required
    />
}

export default DepartmentField
