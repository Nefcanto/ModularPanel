import CodeIcon from "@mui/icons-material/Code"
import Pushes from "./Push/List"

const PushesRoutes = [
    {
        path: "/pushes",
        component: Pushes
    }
]

const PushesMenu = [
    {
        title: "Pushes",
        icon: CodeIcon,
        path: "/pushes"
    }
]

export { PushesRoutes }
export { PushesMenu }
