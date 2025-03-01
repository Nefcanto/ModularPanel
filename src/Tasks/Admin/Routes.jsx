import Tasks from "./Task/List"
import { Task } from "TasksCommon"
import Doers from "./Doer/List"

const TasksRoutes = [
    {
        path: "/tasks/tasks",
        component: Tasks
    },
    {
        path: "/tasks/task",
        component: Task
    },
    {
        path: "/tasks/doers",
        component: Doers
    }
]

export default TasksRoutes
