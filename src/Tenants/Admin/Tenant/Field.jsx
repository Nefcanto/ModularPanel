import { Browse } from "Form"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const TenantField = ({
    choose,
    property,
    show,
}) => {
    return <Browse
        byKey
        choose={entity => choose ? choose(entity) : entity.key}
        entityType="Tenant"
        headers={headers}
        placeholder="TenantsTenant"
        property={property || "Tenant"}
        required
        row={row}
        show={entity => show ? show(entity) : entity.title}
        sorts={sorts}
    />
}

export default TenantField
