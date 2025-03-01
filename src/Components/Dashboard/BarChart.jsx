import { useNavigate } from "react-router"
import {
    Bar,
    BarChart as BarChartRechart,
    CartesianGrid,
    Cell,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Text,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { useMessage } from "Hooks"
import {
    get,
    merge,
    post,
} from "App"
import Cursor from "./Cursor"

const BarChart = props => {

    const {
        colors,
        containerClass,
        data,
        hasGrid,
        hasLegend,
        hover,
        onClick,
        setProgress,
        x,
        xAngle,
        xHeight,
        xInterval,
        y,
        y2,
        y3,
        y4,
        y5,
    } = props

    const navigate = useNavigate()
    const {
        error,
        success,
    } = useMessage()
    const tooltipProps = {}
    const xProps = {}

    const augment = linkToAugment => {
        const anchor = document.createElement("a")
        anchor.href = linkToAugment
        const url = new URL(anchor.href)
        url.searchParams.set("ignoreStoredListParameters", true)
        url.searchParams.sort()
        const augmentedUrl = url.pathname + url.search
        return augmentedUrl
    }

    const handleClick = props => {
        const data = props.payload

        const goTo = link => navigate(augment(link))

        if (onClick) {
            const handler = new Function("parameters", onClick)
            handler({
                error,
                get,
                navigate: goTo,
                post,
                setProgress,
                success,
                ...data,
            })
        }
    }

    if (hover instanceof Function) {
        tooltipProps["content"] = ({ payload }) => {
            return <div
                className="p-2 bg-white border-slate-400 border rounded-md dark:bg-stone-900 dark:text-slate-100"
            >
                {
                    payload?.length > 0
                        ?
                        hover(payload[0].payload)
                        :
                        hover({})
                }
            </div>
        }
    }

    if (xAngle) {
        xProps["tick"] = ({
            payload,
            x,
            y,
        }) => <Text
            angle={xAngle ?? 0}
            dy={10}
            x={x}
            y={y}
        >
                {payload.value}
            </Text>
    }

    return <ResponsiveContainer
        className={merge("min-h-96 w-full mt-5" + containerClass)}
        height="100%"
        width="100%"

    >
        <BarChartRechart data={data}>
            {hasGrid && <CartesianGrid strokeDasharray="2 2" />}
            {
                x &&
                <XAxis
                    dataKey={x}
                    height={(xHeight || 30) * 1}
                    interval={xInterval ?? 0}
                    {...xProps}
                />
            }
            {
                y &&
                <YAxis />
            }
            {
                hover && <Tooltip
                    cursor={<Cursor
                        onClick={handleClick}
                    />}
                    disableInteractive
                    {...tooltipProps}
                />
            }
            {hasLegend && <Legend />}
            <Bar
                dataKey={y}
                fill="#8884d8"
                onClick={handleClick}
            />
            {
                y2 &&
                <Bar
                    dataKey={y2}
                    fill="#82ca9d"
                    onClick={handleClick}
                />
            }
            {
                y3 &&
                <Bar
                    dataKey={y3}
                    fill="#fcba03"
                    onClick={handleClick}
                />
            }
            {
                y4 &&
                <Bar
                    dataKey={y4}
                    fill="#fc5e03"
                    onClick={handleClick}
                />
            }
            {
                y5 &&
                <Bar
                    dataKey={y5}
                    fill="#a103fc"
                    onClick={handleClick}
                />
            }
        </BarChartRechart>
    </ResponsiveContainer>
}

export default BarChart
