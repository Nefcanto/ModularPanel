import CircularProgress from "@mui/material/CircularProgress"
import { getPercentColor } from "App"

const Progress = ({
    className,
    color,
    percent,
    redToGreen,
    size,
}) => {

    const extra = {}
    if (size) {
        extra.size = size
    }
    if (color) {
        extra.style = {
            color: color
        }
    }
    if (redToGreen) {
        extra.style = {
            color: getPercentColor(percent),
            // backgroundColor: getPercentColor(percent)
        }
    }

    return <span
        className={className || ""}
    >
        {
            (percent || percent === 0)
                ?
                <div className="inline-flex relative">
                    <CircularProgress
                        value={percent}
                        variant="determinate"
                        {...extra}
                    />
                    <div className="absolute top-0 end-0 bottom-0 start-0 m-auto text-xs w-full h-full flex items-center justify-center text-slate-600 dark:text-slate-300">
                        {Math.round(percent)}%
                    </div>
                </div>
                :
                <CircularProgress {...extra} />
        }
    </span>
}

export default Progress
