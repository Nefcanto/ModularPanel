import { useState } from "react"
import {
    Cell,
    Legend,
    Pie,
    PieChart as PieChartRechart,
    ResponsiveContainer,
} from "recharts"

const PieChart = ({
    chartDataKey,
    colors,
    data: chartData,
    dataKey,
    nameKey,
    renderLegend,
    ...rest
}) => {

    return <ResponsiveContainer
        width="100%"
        {...rest}
    >
        <PieChartRechart
            height="100%"
            margin={{
                bottom: 5,
                left: 50,
                top: 5,
            }}
            series={{ data: chartData }}
            width="100%"
        >
            {renderLegend && <Legend
                align="right"
                content={renderLegend}
                height={36}
                layout="vertical"
                verticalAlign="top"
            />}
            <Pie
                cx="55%"
                cy="55%"
                data={chartData}
                dataKey={dataKey ?? "value"}
                fill="black"
                fontSize="17px"
                fontWeight="bold"
                nameKey={nameKey ?? "title"}
                label={({
                    cx,
                    cy,
                    index,
                    midAngle,
                    value,
                }) => {
                    const radius = 170
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180))
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180))

                    return <>
                        <text
                            dominantBaseline="top"
                            fill="black"
                            fontSize="18px"
                            fontWeight="bold"
                            x={x}
                            y={y}
                        >
                            {value}
                        </text>
                    </>
                }}
            >
                {
                    chartData.map((item, index) => <Cell key={`cell-${index}`} fill={colors[index]} />)
                }
            </Pie>
            <Pie
                data={chartData}
                dataKey={dataKey ?? "value"}
                cx="55%"
                cy="55%"
                nameKey={nameKey ?? "label"}
                label={({
                    cx,
                    cy,
                    innerRadius,
                    midAngle,
                    outerRadius,
                    percent,
                }) => {
                    const RADIAN = Math.PI / 180
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)

                    return <>
                        <text
                            dominantBaseline="central"
                            fill="black"
                            fontSize="17px"
                            fontWeight="bold"
                            textAnchor={x > cx ? "start" : "end"}
                            x={x}
                            y={y}
                        >
                            {`${(percent * 100).toFixed(0)}%`}
                        </text>
                    </>
                }}
            >
                {
                    chartData.map((item, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                }
            </Pie>
        </PieChartRechart>
    </ResponsiveContainer>

}

export default PieChart
