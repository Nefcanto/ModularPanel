import { MediaCommonRoutes } from "MediaCommon"
import MediaMenu from "./Menu"
import MediaAdminRoutes from "./Routes"

const MediaRoutes = [...MediaAdminRoutes, ...MediaCommonRoutes]

export { MediaMenu }
export { MediaRoutes }
