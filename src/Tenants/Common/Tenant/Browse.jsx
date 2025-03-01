import { Browse } from "Panel"

const TenantBrowser = () => {
    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Tenant"
        headers={<><th>InfraTitle</th></>}
        image={entity => entity.relatedItems.logoUrl}
        placeholder="TenantsTenant"
        property="Tenant"
        row={entity => <><td>{entity.title}</td></>}
        show={entity => entity.displayName}
        sorts={sorts}
    />
}

export default TenantBrowser
