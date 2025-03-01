import {
    CartesianGrid,
    Legend,
    Line,
    LineChart as Chart,
    ResponsiveContainer,
    Text,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

const LineChart = ({
    data,
    height,
    hover,
    legend,
    span,
    transformX,
    transformY,
    value,
    x,
    xAngle,
    xInterval,
    y,
}) => {

    const tooltipProps = {}
    const xProps = {}
    const yProps = {}
    const legendProps = {}
    if (hover instanceof Function) {
        tooltipProps["content"] = ({ payload }) => {
            return <div
                className="p-2 bg-white border-slate-400 border rounded-md"
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
    if (transformX instanceof Function) {
        xProps["tick"] = ({
            payload,
            x,
            y,
        }) => <Text
            angle={xAngle ?? 0}
            dy={15}
            textAnchor="middle"
            x={x}
            y={y}
        >
                {transformX(payload.value)}
            </Text>
    }

    if (legend instanceof Function) {
        legendProps["content"] = ({
            payload
        }) => legend(payload)
    }

    return <ResponsiveContainer
        width="100%"
        height={height || 300}
    >
        <Chart
            data={data}
            margin={{
                bottom: 20,
                left: 20,
                right: 30,
                top: 20,
            }}
        >
            {
                legend &&
                <Legend
                />
            }
            <Line
                dataKey={value}
                stroke="#8884d8"
                type="monotone"
            />
            <CartesianGrid
                stroke="#ccc"
                strokeDasharray="3"
            />
            {
                x &&
                <XAxis
                    dataKey={x}
                    interval={xInterval}
                    {...xProps}
                />
            }
            {
                y &&
                <YAxis
                    dataKey={y}
                    {...yProps}
                />
            }
            {
                hover &&
                <Tooltip
                    disableInteractive
                    {...tooltipProps}
                />
            }
        </Chart>
    </ResponsiveContainer>
}

export default LineChart
