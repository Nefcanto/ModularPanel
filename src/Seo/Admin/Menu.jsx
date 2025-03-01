import MonitorHeartIcon from "@mui/icons-material/MonitorHeart"
import SearchIcon from "@mui/icons-material/Search"

const SeoMenu = [
    {
        title: "SeoSeo",
        icon: SearchIcon,
        children: [
            {
                title: "SeoRedirects",
                path: "/seo/redirects"
            },
            {
                title: "SeoGones",
                path: "/seo/gones"
            },
            {
                title: "SeoPaths",
                path: "/seo/paths",
                superAdmin: true
            },
            {
                title: "SeoEntityParameters",
                path: "/seo/entities",
                superAdmin: true
            },
            {
                title: "SeoLocalBusiness",
                path: "/seo/localBusiness",
                superAdmin: true
            },
            {
                title: "SeoOrganization",
                path: "/seo/organization",
                superAdmin: true
            },
            {
                title: "SeoLinkGroups",
                path: "/seo/linkGroups",
                superAdmin: true
            }
        ]
    },
    {
        title: "SeoSeoTools",
        icon: MonitorHeartIcon,
        superAdmin: true,
        children: [
            {
                title: "SeoBrokenLinks",
                path: "/seo/brokenLinks"
            },
            {
                title: "SeoSitemapGenerator",
                path: "/seo/sitemapGenerator"
            }
        ]
    }
]

export default SeoMenu
