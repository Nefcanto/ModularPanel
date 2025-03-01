import {
    Image,
    List,
    TitleSubtitle,
} from "List"
import TenantForm from "./Form"
import entityActions from "./EntityActions"

const headers = <>
    <th></th>
    <th>InfraTitle</th>
    <th>TenantsDomain</th>
</>

const row = entity => <>
    <Image readOnly />
    <TitleSubtitle
        link={`https://${entity.domain}`}
        subtitle={entity.relatedItems.juridicalPerson?.slogan}
        title={entity.displayName}
    />
    <td>{entity.domain}</td>
</>

const Tenants = () => {
    return <List
        create={TenantForm}
        entityActions={entityActions}
        entityType="Tenant"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        separateRowForActions
        title="TenantsTenants"
    />
}

export default Tenants
