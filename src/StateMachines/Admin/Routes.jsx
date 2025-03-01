import StateMachines from "./StateMachine/List"
import States from "./State/List"
import Transitions from "./Transition/List"

const StateMachinesRoutes = [
    {
        path: "/stateMachines/stateMachines",
        component: StateMachines
    },
    {
        path: "/stateMachines/stateMachineStates",
        component: States
    },
    {
        path: "/stateMachines/transitions",
        component: Transitions
    },
]

export default StateMachinesRoutes
