import {
    useEffect,
    useState
} from "react"
import CircularProgress from "@mui/material/CircularProgress"
import AddchartIcon from "@mui/icons-material/Addchart"
import Button from "@mui/material/Button"
import { Page } from "Page"
import {
    parseQuery,
    post,
    t,
} from "App"
import { useMessage } from "Hooks"
import { HolismIcon } from "List"
import Chart from "./Chart"

const AggregateChartPage = ({
    breadcrumbItems,
    fourthDimension,
    propertyX,
    thirdDimension,
    thirdDimensionField,
    transformationForX,
}) => {
    const { progress, setProgress } = useState(false)
    const [reload, setReload] = useState(false)
    const {
        entityType,
        firstDimension,
    } = parseQuery()

    const {
        error,
        success
    } = useMessage()

    useEffect(() => {
        if (thirdDimension) {
            setReload(true)
            setInterval(() => {
                setReload(false)
            }, 1_000)
        }
    }, [thirdDimension])

    return <Page
        breadcrumbItems={breadcrumbItems}
        className="px-6 md:px-12 mx-auto dark:bg-stone-900 lg:w-full"
    >
        <div>
            <Button
                className="me-2 mt-2 lg:mt-0"
                onClick={() => {

                    post(`/aggregate/calculate?entityType=${entityType}&firstDimension=${firstDimension}`)
                        .then(data => {
                            success("AggregatesSuccessCalculated")
                            setReload(true)
                        }, e => {
                            error(e)
                        })
                }}
                startIcon={
                    progress
                        ?
                        <CircularProgress
                            size={20}
                        />
                        :
                        <HolismIcon icon={AddchartIcon} />

                }
                variant="outlined"
            >
                {t("AggregatesCalculate")}
            </Button>

            {thirdDimensionField && thirdDimensionField()}
        </div>
        <div>
            <Chart
                firstDimension={firstDimension}
                propertyX={propertyX}
                reload={reload}
                thirdDimension={thirdDimension}
                transformationForX={transformationForX}
                fourthDimension={fourthDimension}
            />
        </div>
    </Page>

}

export default AggregateChartPage
