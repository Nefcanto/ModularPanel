import AutoGraphIcon from "@mui/icons-material/AutoGraph"
import { post } from "App"
import { HeaderAction } from "Panel"

const Calculate = () => {

    const calculate = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/aggregate/calculate")
            .then(data => {
                setProgress(false)
                success("Aggregates are calculated")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <HeaderAction
        icon={AutoGraphIcon}
        onClick={calculate}
        title="AggregatesCalculatingAggregates"
    />
}

export default Calculate
