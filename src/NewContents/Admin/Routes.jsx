import Instances from "./Instance/List"
import Parts from "./Part/List"

const NewContentsRoutes = [
    {
        path: "/newContents/parts",
        component: Parts
    },
    {
        path: "/newContents/instances",
        component: Instances
    }
]

export default NewContentsRoutes
