import BaseChart from "../BaseChart"
import { useDateTime } from "Hooks"

const AggregateChart = ({
    firstDimension,
    fourthDimension,
    propertyX,
    reload,
    thirdDimension,
    transformationForX,
}) => {

    const { getLocaleMonthName } = useDateTime()

    const hover = (currentInterval, entity) => <>
        <div>{getLocaleMonthName(entity[propertyX])}</div>
        <h1>{entity.quantity?.toLocaleString()}</h1>
    </>

    return firstDimension && <div dir="ltr">
        <BaseChart
            interval="monthly"
            loadingUrl={`/aggregate/list?firstDimension=${firstDimension}${thirdDimension ? `&thirdDimension=${thirdDimension}${fourthDimension ? `&fourthDimension=${fourthDimension}` : ``}` : ""}`}
            propertyX={propertyX}
            reload={reload}
            hover={hover}
            transformationForX={transformationForX}
        />

    </div>

}

export default AggregateChart
