import {
    useEffect,
    useState,
} from "react"
import {
    get,
    t,
} from "App"
import { useDateTime } from "Hooks"
import {
    BlurredProgress,
    DatePart,
    LineChart,
} from "Dashboard"

const BaseChart = ({
    angleForX,
    entityType,
    hover,
    interval,
    loadingUrl,
    metric,
    propertyX,
    propertyY,
    reload,
    transformationForX,
}) => {

    const currentIntervals = ["Daily", "Weekly", "Monthly"]
    const [currentInterval, setCurrentInterval] = useState(interval ?? currentIntervals[0])
    const [data, setData] = useState({})
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [progress, setProgress] = useState(false)
    const [loadData, setLoadData] = useState(false)
    const {
        getMonthName,
        getShortMonthName,
    } = useDateTime()

    const getProperty = () => {

        if (propertyX) {
            return propertyX
        }
        switch (currentInterval.toLowerCase()) {
            case "daily":
                return "utcDate"
            case "weekly":
                return "weekNumber"
            case "monthly":
                return "month"
            default:
                return "utcDate"
        }
    }

    const getPropertyY = () => {
        if (propertyY) {
            return propertyY
        }
        return "quantity"
    }
    const getTransformationForX = x => {
        if (transformationForX && typeof transformationForX == "function") {
            return transformationForX(x)
        }
        switch (currentInterval.toLowerCase()) {
            case "daily":
                return new Date(x).getDate()
            case "weekly":
                return x
            case "monthly":
                return getMonthName(x)
            default:
                return Date(x).getDate()
        }
    }

    const getAngleForX = () => {
        if (angleForX && typeof angleForX == "function") {
            return angleForX
        }
        switch (currentInterval.toLowerCase()) {
            case "daily":
                return 0
            case "weekly":
                return 0
            case "monthly":
                return -45
            default:
                return 0
        }
    }

    const getHover = entity => {
        if (hover) {
            return hover(currentInterval, entity)
        }
        switch (currentInterval.toLowerCase()) {
            case "daily":
                return <>
                    <DatePart date={entity?.utcDate} />
                    <h1>{entity?.[getPropertyY()]?.toLocaleString()} {t(metric)}</h1>
                </>
            case "weekly":
                return <>
                    <div>{t("Week")} {entity?.weekNumber}</div>
                    <h1>{entity?.[getPropertyY()]?.toLocaleString()} {t(metric)}</h1>
                </>
            case "monthly":
                return <>
                    <div>{getMonthName(entity.month)}</div>
                    <h1>{entity?.[getPropertyY()]?.toLocaleString()} {t(metric)}</h1>
                </>
            default:
                return null
        }
    }

    const load = currentInterval => {
        setProgress(true)
        let url = loadingUrl
        get(url)
            .then(data => {
                setProgress(false)
                setData(data.data.reverse())
                setLoadData(false)
            }, e => {
                setProgress(false)
                setLoadData(false)
                console.error(e)
            })
    }

    useEffect(() => {
        load(currentInterval)
    }, [currentInterval])

    useEffect(() => {
        if (loadData) {
            load(currentInterval)
        }
    }, [loadData])

    useEffect(() => {
        setLoadData(reload)
    }, [reload])

    return <>
        <div className="relative">
            <LineChart
                data={data}
                hover={getHover}
                transformX={getTransformationForX}
                value="quantity"
                x={getProperty()}
                xAngle={getAngleForX()}
                y={(getPropertyY())}
            />
            {
                progress &&
                <BlurredProgress />
            }
        </div>
    </>
}

export default BaseChart
