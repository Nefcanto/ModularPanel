import Levels from "./Level/List"
import Skills from "./Skill/List"

const GradingRoutes = [
    {
        path: "/skills",
        component: Skills
    },
    {
        path: "/levels",
        component: Levels
    },
    {
        path: "/grades",
        components: <div>Grades</div>
    }
]

export default GradingRoutes
