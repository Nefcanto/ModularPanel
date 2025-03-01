import { List } from "List"
import TenantPerson from "./Form"

const headers = <>
    <th>InfraName</th>
</>

const row = entity => <>
    <td>{entity.displayName}</td>
</>

const TenantPersons = ({
    parentEntity,
    progress,
}) => {
    return !progress && <List
        breadcrumbItems={[
            {
                title: "TenantsTenants",
                link: "/tenants"
            },
            {
                title: parentEntity?.title,
                link: `/tenants?title=containing_${parentEntity?.title}`
            },
            {
                title: "TenantsTenantPersons"
            }
        ]}
        title="TenantsTenantPerson"
        entityType="TenantPerson"
        headers={headers}
        row={row}
        create={TenantPerson}
        hasDelete
    />
}

export default TenantPersons
