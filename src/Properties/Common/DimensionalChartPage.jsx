import { useState } from "react"
import { useDateTime } from "Hooks"
import { AggregateChartPage } from "AggregatesCommon"
import ReasonField from "./ReasonField"

const DimensionalChartPage = props => {

    const [thirdDimension, setThirdDimension] = useState("sale")
    const { getLocaleMonthName } = useDateTime()

    const thirdDimensionField = () => {

        return <ReasonField
            onChange={value => setThirdDimension(value)}
            initialValue={thirdDimension}
        />
    }

    const transformationForX = x => {
        return getLocaleMonthName(x)
    }

    return <AggregateChartPage
        thirdDimensionField={thirdDimensionField}
        thirdDimension={thirdDimension}
        fourthDimension="monthly"
        propertyX="sixthDimension"
        transformationForX={transformationForX}
        {...props}
    />
}

export default DimensionalChartPage
