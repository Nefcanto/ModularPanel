import BlogRoutes from "../Routes"
import {
    equalTo,
    url,
} from "App"

const useBlogBreadcrumb = ({
    path,
    query,
    parent,
}) => {
    const isModuleRoute = BlogRoutes.find(i => i.path == path)
    const hasModule = query["module"]?.toLowerCase() === "blog" || query["entityType"]?.toLowerCase() === "post".toLowerCase() || query["entityType"]?.toLowerCase() === "postContent".toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "blogPosts",
                link: path !== "/blog/posts" && "/blog/posts"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/blog/posts",
                    filters: [
                        equalTo("id", parent.id)
                    ]
                })
            }
        ]
    }
}

export default useBlogBreadcrumb
