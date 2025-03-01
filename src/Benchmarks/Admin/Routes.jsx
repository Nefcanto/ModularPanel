import LookupKeys from "./LookupKey/List"
import LookupIds from "./LookupId/List"
import StringIds from "./StringId/List"

const BenchmarksRoutes = [
    {
        path: "/lookupKeys",
        component: LookupKeys
    },
    {
        path: "/lookupIds",
        component: LookupIds
    },
    {
        path: "/stringIds",
        component: StringIds
    }
]

export default BenchmarksRoutes
