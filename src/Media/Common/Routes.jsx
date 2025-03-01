import Files from "./File/List"
import Images from "./Image/List"
import Videos from "./Video/List"

const MediaCommonRoutes = [
    {
        path: "/media/images",
        component: Images
    },
    {
        path: "/media/files",
        component: Files
    },
    {
        path: "/media/videos",
        component: Videos
    }
]

export default MediaCommonRoutes
