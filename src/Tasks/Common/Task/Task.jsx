import {
    useEffect,
    useState,
} from "react"
import {
    get,
    parseQuery,
} from "App"
import { useMessage } from "Hooks"
import CommentCards from "../Comment/Card"
import { CategoryChips } from "NewTaxonomy"
import { UserChips } from "Accounts"

const Task = () => {

    const { error } = useMessage()

    const [progress, setProgress] = useState(true)
    const [taskId, setTaskId] = useState(parseQuery().taskId)
    const [task, setTask] = useState(null)

    useEffect(() => {
        setProgress(true)
        get(`/task/get/${taskId}`)
            .then(data => {
                setProgress(false)
                setTask(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [taskId])

    return !progress && <div className="px-6">
        <div className="flex flex-col gap-2 border-b pb-6">
            <h1 className="text-2xl font-black">{task.title}</h1>
            <p>{task.description}</p>
            <TagChips entity={task} />
            <CategoryChips entity={task} />
            <UserChips
                entity={task}
            />
        </div>
        <CommentCards taskId={task.id} />
    </div>
}

export default Task
