import {
    useEffect,
    useState,
} from "react"
import {
    get,
    post,
} from "App"
import {
    InlineForm,
    LongText,
} from "Form"
import { UserChip } from "Accounts"

const CommentCards = ({
    className,
    entity,
}) => {

    if (!entity) {
        throw new Error("Entity is null or undefined")
    }

    const [progress, setProgress] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        setProgress(true)
        get(`/comment/all?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`)
            .then(data => {
                setProgress(false)
                setComments(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [entity])

    const save = ({
        data,
        error,
        resetFields,
        setProgress,
    }) => {
        setProgress(true)
        post(`/comment/save?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`, data)
            .then(result => {
                setProgress(false)
                setComments(previousComments => [...previousComments, result])
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <div className={className || ""}>
        <div>
            {
                comments.map(comment => <div
                    className=" border-b py-4"
                    key={comment.id}
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
