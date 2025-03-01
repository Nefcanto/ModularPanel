import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { Select } from "Form"

const IntervalField = (props) => {

    const [Intervals, setIntervals] = useState([])
    const [IntervalProgress, setIntervalProgress] = useState(true)
    const { error } = useMessage()

    useEffect(() => {
        get("/interval/all")
            .then(data => {
                setIntervals(data)
                setIntervalProgress(false)
            }, e => {
                error(e)
                setIntervalProgress(false)
            })
    }, [])

    return <Select
        property="IntervalId"
        placeholder="PricingInterval"
        options={Intervals}
        display={i => i?.title}
        choose={i => i.id}
        loading={IntervalProgress}
        required
        {...props}
    />
}

export default IntervalField
