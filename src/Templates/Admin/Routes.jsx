import Templates from "./Template/List"
import TestTemplate from "./Template/Test"

const TemplatesRoutes = [
    {
        path: "/templates",
        component: Templates
    },
    {
        path: "/testTemplate",
        component: TestTemplate
    }
]

export default TemplatesRoutes
