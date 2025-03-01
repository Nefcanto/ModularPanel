import {
    useEffect,
    useState,
} from "react"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import {
    get,
    getLocale,
    t
} from "App"
import { useNumeric } from "Hooks"
import {
    Progress,
    Widget
} from "Dashboard"
import ReasonField from "./ReasonField"
import IntervalField from "./IntervalField"

const CustomTooltip = ({
    active,
    label,
    payload
}) => {

    if (active && payload && payload.length) {
        return <div className="flex flex-col gap-2 py-5 px-2 rounded-md bg-gray-100/80">
            <div className="flex gap-2">
                <p>{t("ContactsName")} :</p>
                <p>{label}</p>
            </div>
            <div className="flex gap-2">
                <p>{t("InfraValue")} :</p>
                <p> {payload[0].value?.toLocaleString()}</p>
            </div>
        </div>
    }
    return null
}

const CumulativeChart = ({
    chartActions,
    dataLoadingUrl,
    reload: reloadChart,
    title,
}) => {

    const [reload, setReload] = useState()
    const [progress, setProgress] = useState(false)
    const [commissions, setCommissions] = useState([])
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [reasonKey, setReasonKey] = useState("sale")
    const [interval, setInterval] = useState("monthly")
    const [date, setDate] = useState(new Date())
    const { convertToEnDigits } = useNumeric()
    const [valuesDateTimePicker, setValuesDateTimePicker] = useState(["year", "month"])
    const loadData = () => {
        setProgress(true)
        let queryUrl = ""
        let url = dataLoadingUrl
        if (!url.includes("?")) {
            url += "?"
        }
        if (year) {
            queryUrl += `&year=${year}`
        }
        if (month && interval == "monthly") {
            queryUrl += `&month=${month}`
        }
        queryUrl += `&reasonKey=${reasonKey}`

        url += queryUrl
        url = url.replace("?&", "?")
        get(url).then(data => {
            data.sort((a, b) => (+b?.quantity) - (+a?.quantity))
            setCommissions(data)
            setProgress(false)
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        if (reload) {
            loadData()
            setReload(false)
        }
    }, [reload])

    useEffect(() => {
        setReload(reloadChart)
    }, [reloadChart])

    useEffect(() => {
        setReload(true)
    }, [reasonKey])

    useEffect(() => {
        if (interval == "yearly") {
            setValuesDateTimePicker(["year"])
        } else {
            setValuesDateTimePicker(["year", "month"])
        }
        setReload(true)
    }, [interval])

    return <Widget
        title={title}
    >
        <div className="flex p-5 mb-2 gap-2">
            <DateTimePicker
                label={` ${t("AggregatesYear")}-${t("AggregatesMonth")}`}
                onChange={date => {
                    setDate(date)
                    if (getLocale().key == supportedLocales.fa) {

                        let month = date.toLocaleDateString(
                            supportedLocales.fa,
                            { month: "numeric" }
                        )

                        let year = date.toLocaleDateString(
                            supportedLocales.fa,
                            { year: "numeric" })

                        setMonth(convertToEnDigits(month))
                        setYear(convertToEnDigits(year))
                        setReload(true)

                    } else {
                        setMonth(date.getMonth() + 1)
                        setYear(date.getFullYear())
                    }

                }}
                slotProps={{ textField: { size: "small" } }}
                value={date}
                views={valuesDateTimePicker}
            />
            <ReasonField
                initialValue={reasonKey}
                onChange={value => setReasonKey(value)}
            />
            <IntervalField
                initialValue={interval}
                onChange={value => setInterval(value)}
            />

            {chartActions}
        </div>
        {
            progress ?
                <Progress /> :
                <div dir="ltr">
                    <ResponsiveContainer className="min-h-96 w-full mt-5">
                        <BarChart
                            data={commissions}
                            height={300}
                            layout="vertical"
                            width={500}
                        >
                            <XAxis type="number" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={100}
                            />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip
                                disableInteractive
                                content={<CustomTooltip />}
                            />
                            <Legend />
                            <Bar
                                barSize={20}
                                dataKey="quantity"
                                fill="#8884d8"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
        }
    </Widget>
}

export default CumulativeChart
