import VlogRoutes from "../Routes"
import {
    equalTo,
    url,
} from "App"

const useVlogBreadcrumb = ({
    path,
    query,
    parent,
}) => {
    const isModuleRoute = VlogRoutes.find(i => i.path == path)
    const hasModule = query["module"]?.toLowerCase() == "vlog" ||
        query["entityType"]?.toLowerCase() == "vlogVideo".toLowerCase() ||
        query["entityType"]?.toLowerCase() == "vlogVideoContent".toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "vlogVideos",
                link: path !== "/vlog/videos" && "/vlog/videos"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/vlog/videos",
                    filters: [
                        equalTo("id", parent.id)
                    ]
                })
            }
        ]
    }
}

export default useVlogBreadcrumb
