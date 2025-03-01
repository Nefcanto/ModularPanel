import GlossaryRoutes from "../Routes"
import {
    equalTo,
    url,
} from "App"

const useGlossaryBreadcrumb = ({
    path,
    query,
    parent,
}) => {
    const isModuleRoute = GlossaryRoutes.find(i => i.path === path)
    const hasModule = query["entityType"] === "Entry" || query["entityType"] === "EntryContent"
    if (isModuleRoute || hasModule) {
        return [
            {
                title: "GlossaryEntries",
                link: path !== "/entries" && "/entries"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/entries",
                    filters: [
                        equalTo("title", parent.title)
                    ]
                })
            }
        ]
    }
}

export default useGlossaryBreadcrumb
