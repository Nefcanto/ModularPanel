import FlowsRoutes from "../Routes"
import {
    containing,
    url,
} from "App"

const useFlowsBreadcrumb = ({
    path,
    query,
    parent,
    grandparent,
}) => {
    const isModuleRoute = FlowsRoutes.find(i => i.path === path)

    const hasModule =
        query["entityType"]?.toLowerCase() === "Flow"?.toLowerCase() ||
        query["entityType"]?.toLowerCase() === "Stage"?.toLowerCase() ||
        query["entityType"]?.toLowerCase() === "EntityStage"?.toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "FlowsDefinedFlows",
                link: path !== "/flows" && "/flows"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/flows",
                    filters: [
                        containing("search", parent.title)
                    ]
                })
            }
        ]
    }
}

export default useFlowsBreadcrumb
