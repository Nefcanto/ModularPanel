import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { Select } from "Form"

const ReasonField = props => {

    const [reasons, setReasons] = useState([])
    const [reasonProgress, setReasonProgress] = useState(true)
    const { error } = useMessage()

    useEffect(() => {
        let url = `/reason/all`
        get(url)
            .then(data => {
                setReasons(data)
                setReasonProgress(false)
            }, e => {
                error(e)
                setReasonProgress(false)
            })
    }, [])

    return <>
        <Select
            property="ReasonId"
            placeholder="CommissionsReason"
            options={reasons}
            display={i => i?.title}
            choose={i => i.id}
            loading={reasonProgress}
            {...props}
        />
    </>
}

export default ReasonField
