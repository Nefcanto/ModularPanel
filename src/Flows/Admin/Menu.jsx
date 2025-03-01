import RouteIcon from "@mui/icons-material/Route"

const FlowsMenu = [
    {
        title: "FlowsFlows",
        icon: RouteIcon,
        children: [
            {
                title: "InfraPart",
                path: "/part/flows"
            },
            {
                title: "InfraDefining",
                path: "/flows"
            },
            {
                title: "InfraApplying",
                path: "/entityStages"
            },
        ]
    }
]

export default FlowsMenu
