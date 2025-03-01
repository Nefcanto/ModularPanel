import { Blobs } from "TenantsCommon"
import { EditContentForm } from "TenantsCommon"
import GlobalEntityTypes from "./GlobalEntityType/List"
import TenantPersons from "./TenantPerson/List"
import Tenants from "./Tenant/List"

const TenantsRoutes = [
    {
        path: "/tenants",
        component: Tenants
    },
    {
        path: "/tenantPersons",
        component: TenantPersons
    },
    {
        path: "/globalEntityTypes",
        component: GlobalEntityTypes
    },
    {
        path: "/tenants/blobs",
        component: Blobs
    },
    {
        path: "/tenants/blob/content",
        component: EditContentForm
    }
]

export default TenantsRoutes
