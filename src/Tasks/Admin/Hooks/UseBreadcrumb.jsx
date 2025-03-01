import TasksRoutes from "../Routes"
import {
    containing,
    equalTo,
    url,
} from "App"

const useTasksBreadcrumb = ({
    grandparent,
    greatGrandparent,
    greatGreatGrandparent,
    parent,
    path,
    query,
}) => {

    const isModuleRoute = TasksRoutes.find(i => i.path === path)

    if (isModuleRoute) {
        return [
            {
                title: "TasksTasks",
                link: path !== "/tasks/tasks" && "/tasks/tasks"
            }
        ]
    }
}

export default useTasksBreadcrumb
