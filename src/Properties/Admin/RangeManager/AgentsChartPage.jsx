import {
    useEffect,
    useState,
} from "react"
import AddchartIcon from "@mui/icons-material/Addchart"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import {
    parseQuery,
    post,
    t,
} from "App"
import { useMessage } from "Hooks"
import { HolismIcon } from "List"
import { Page } from "Page"
import { AgentsChart } from "PropertiesCommon"

const AgentsChartPage = ({
    parentEntity,
    progress,
}) => {
    const { rangeManagerId } = parseQuery()
    const { error, success } = useMessage()
    const [progressCalculateAction, setProgressCalculateAction] = useState(false)
    const [reloadChart, setReloadChart] = useState(false)

    useEffect(() => {
        if (reloadChart) {
            setReloadChart(false)
        }
    }, [reloadChart])

    const chartActions = <>
        <Button
            variant="outlined"
            startIcon={
                progressCalculateAction
                    ?
                    <CircularProgress size={20} />
                    :
                    <HolismIcon icon={AddchartIcon} />

            }
            onClick={() => {
                setProgressCalculateAction(true)
                post(`/rangeManager/calculateAgentsAggregateCommission?rangeManagerId=${rangeManagerId}`)
                    .then(data => {
                        setProgressCalculateAction(false)
                        success("AggregatesSuccessCalculated")
                        setReloadChart(true)
                    }, e => {
                        setProgressCalculateAction(false)
                        error(e)
                    })
            }}
            className={`me-2 mt-2 lg:mt-0`}
        >
            {t("AggregatesCalculate")}
        </Button>
    </>

    return !progress && <Page
        breadcrumbItems={[
            {
                title: "PropertiesRangeManagers",
                link: "/properties/rangeManagers"
            },
            {
                title: parentEntity?.displayName,
                link: `/properties/rangeManagers?displayName=containing_${parentEntity?.displayName}`
            }
        ]}
        title="PropertiesAgentsChart"
    >
        <AgentsChart
            chartActions={chartActions}
            dataLoadingUrl={`/rangeManager/getAgentsCumulativeCommissions?rangeManagerId=${rangeManagerId}`}
            reload={reloadChart}
        />

    </Page>
}

export default AgentsChartPage
