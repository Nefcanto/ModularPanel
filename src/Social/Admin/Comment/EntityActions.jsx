import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { post } from "App"
import { EntityAction } from "List"

const entityActions = entity => {

    const approve = ({
        error,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/comment/approve/${entity.id}`)
            .then(data => {
                setProgress(false)
                success("InfraDone")
                setEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const reject = ({
        error,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/comment/reject/${entity.id}`)
            .then(data => {
                setProgress(false)
                success("InfraDone")
                setEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        {
            entity.state != "rejected" &&
            <EntityAction
                color="text-red-400"
                icon={CloseIcon}
                onClick={reject}
                title="Reject"
            />
        }
        {
            (entity.state != "approved") &&
            <EntityAction
                color="text-green-400"
                icon={CheckIcon}
                onClick={approve}
                title="Approve"
            />
        }
    </>
}

export default entityActions
