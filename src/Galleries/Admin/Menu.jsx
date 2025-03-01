import BurstModeIcon from "@mui/icons-material/BurstMode"

const GalleriesMenu = [
    {
        title: "GalleriesGalleries",
        icon: BurstModeIcon,
        children: [
            {
                title: "GalleriesImageGalleries",
                path: "/galleries/galleries"
            },
            {
                title: "GalleriesVideoGalleries",
                path: "/galleries/videoGalleries"
            },
        ]
    }
]

export default GalleriesMenu
