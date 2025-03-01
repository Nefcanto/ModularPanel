import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import StopIcon from "@mui/icons-material/Stop"
import { post } from "App"
import { EntityAction } from "List"

const StartStop = ({ entity }) => <EntityAction
    title={entity.startedDate ? "Stop" : "Start"}
    icon={entity.startedDate ? StopIcon : PlayArrowIcon}
    onClick={({
        error,
        setEntity,
        setProgress,
    }) => {
        setProgress(true)
        const url = `/task/${entity.startedDate ? "stop" : "start"}/${entity.id}`
        console.log(url)
        post(url)
            .then(data => {
                setProgress(false)
                setEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }}
/>

export default StartStop
