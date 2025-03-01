import ProjectsRoutes from "../Routes"
import {
    equalTo,
    url,
} from "App"

const useVlogBreadcrumb = ({
    path,
    query,
    parent,
}) => {
    const isModuleRoute = ProjectsRoutes.find(i => i.path == path)
    const hasModule = query["module"]?.toLowerCase() == "projects" || query["entityType"]?.toLowerCase() == "project".toLowerCase() || query["entityType"]?.toLowerCase() == "projectContent".toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "ProjectsProjects",
                link: path !== "/projects" && "/projects"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/projects",
                    filters: [
                        equalTo("id", parent.id)
                    ]
                })
            }
        ]
    }
}

export default useVlogBreadcrumb
