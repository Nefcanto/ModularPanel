import Galleries from "./Gallery/List"
import VideoGalleries from "./VideoGallery/List"

const GalleriesRoutes = [
    {
        path: "/galleries/galleries",
        component: Galleries
    },
    {
        path: "/galleries/videoGalleries",
        component: VideoGalleries
    },
]

export default GalleriesRoutes
