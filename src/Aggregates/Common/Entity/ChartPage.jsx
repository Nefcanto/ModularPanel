import CircularProgress from "@mui/material/CircularProgress"
import AddchartIcon from "@mui/icons-material/Addchart"
import Button from "@mui/material/Button"
import { useState } from "react"
import { Page } from "Page"
import {
    parseQuery,
    post,
    t,
} from "App"
import { useMessage } from "Hooks"
import { HolismIcon } from "List"
import EntityChart from "./Chart"

const EntityAggregateChartPage = ({
    breadcrumbItems
}) => {
    const { progress, setProgress } = useState(false)
    const [reload, setReload] = useState(false)
    const {
        entityGuid,
        entityType,
    } = parseQuery()

    const {
        error,
        success
    } = useMessage()

    return <Page
        breadcrumbItems={breadcrumbItems}
        className="px-6 md:px-12 mx-auto dark:bg-stone-900 lg:w-full"
    >
        <div>
            <Button
                className={`me-2 mt-2 lg:mt-0`}
                onClick={() => {

                    post(`/entityAggregate/calculate?entityType=${entityType}&entityGuid=${entityGuid}`)
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
        </div>
        <div>
            <EntityChart
                entityGuid={entityGuid}
                entityType={entityType}
                reload={reload}
            />
        </div>
    </Page>

}

export default EntityAggregateChartPage
