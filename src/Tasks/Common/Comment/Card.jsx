import {
    useEffect,
    useState,
} from "react"
import {
    get,
    post,
} from "App"
import { Progress } from "Panel"
import { useMessage } from "Hooks"
import {
    InlineForm,
    LongText,
} from "Form"
import { UserChip } from "Accounts"

const CommentCards = ({ taskId }) => {

    const { error } = useMessage()
    const [progress, setProgress] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        setProgress(true)
        get(`/tasksComment/all?taskId=${taskId}`)
            .then(data => {
                setProgress(false)
                setComments(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [taskId])

    const save = ({
        data,
        setProgress,
    }) => {
        setProgress(true)
        post(`/tasksComment/create?taskId=${taskId}`, data)
            .then(result => {
                setProgress(false)
                setComments(previousComments => [...previousComments, result.data])
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return progress
        ?
        <Progress />
        :
        <div className="flex-1">
            <div>
                {
                    comments.map(comment => <div
                        key={comment.id}
                        className=" border-b py-4"
                    >
                        <div className="flex gap-2">
                            <UserChip entity={comment} />
                            <span className="text-xs font-light text-slate-600 mt-1">{comment.relatedItems.timeAgo}</span>
                        </div>
                        <p className="ms-16">{comment.body}</p>
                    </div>)
                }
            </div>
            <InlineForm
                entityType="Comment"
                inputs={<>
                    <LongText
                        property="Body"
                        required
                    />
                </>}
                okAction={save}
            />
        </div>
}

export default CommentCards
