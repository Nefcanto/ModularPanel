import StateMachinesRoutes from "../Routes"
import {
    containing,
    equalTo,
    url,
} from "App"

const useStateMachinesBreadcrumb = ({
    grandparent,
    greatGrandparent,
    greatGreatGrandparent,
    parent,
    path,
    query,
}) => {

    const isModuleRoute = StateMachinesRoutes.find(i => i.path === path)

    if (isModuleRoute) {
        return [
            {
                title: "StateMachinesStateMachines",
                link: path !== "/stateMachines/StateMachines" && "/stateMachines/stateMachines"
            }
        ]
    }
}

export default useStateMachinesBreadcrumb
