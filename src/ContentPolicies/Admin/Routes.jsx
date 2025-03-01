import ModuleContentPolicies from "./ModuleContentPolicy/List"
import SystemPolicies from "./SystemContentPolicy/List"

const ContentPoliciesRoutes = [
    {
        path: "/systemContentPolicies",
        component: SystemPolicies
    },
    {
        path: "/moduleHeteroContentPolicies",
        component: <div>Not implemented</div>
    },
    {
        path: "/moduleContentPolicies",
        component: ModuleContentPolicies
    },
    {
        path: "/entityTypeHeteroContentPolicies",
        component: <div>Not implemented</div>
    },
    {
        path: "/entityTypeContentPolicies",
        component: <div>Not implemented</div>
    },
    {
        path: "/entityHeteroContentPolicies",
        component: <div>Not implemented</div>
    },
    {
        path: "/entityHeteroContentPolicies",
        component: <div>Not implemented</div>
    },
]

export default ContentPoliciesRoutes
