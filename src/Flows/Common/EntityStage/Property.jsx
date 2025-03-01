import CheckIcon from "@mui/icons-material/Check"
import { useContext } from "react"
import { t } from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    LabelValue,
    Progress,
} from "Panel"
import { DateTime } from "List"

const EntityStagesProperty = ({
    full,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)
    const { isTable } = useContext(ListContext)
    const {
        entityFlows,
        entityStages,
    } = entity.relatedItems
    const flows = Array.from(new Set(entityStages?.map(i => i.flowsFlowTitle)))

    if (isTable) {
        return <div>Entity stages</div>
    }

    const getTitle = flow => {
        if (flows.length > 1) {
            return `${t("FlowsStages")} (${flow})`
        }
        return "FlowsStages"
    }

    const getStagesJsx = flow => {

        const flowStages = entityStages?.filter(i => i.flowsFlowTitle === flow)

        return <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {
                flowStages?.map(entityStage =>
                    <div
                        className="text-xs font-semibold flex items-center justify-center p-1 rounded-md bg-white dark:bg-black gap-1"
                        key={entityStage.id}
                    >
                        <CheckIcon className="w-4 aspect-square fill-green-500" />
                        {entityStage.order} - {entityStage.title}
                        <div className="px-2 ">
                            <DateTime
                                date={entityStage.startUtcDate}
                            />
                        </div>
                    </div>

                )
            }
        </div>
    }

    const getCounterJsx = flow => {

        const entityFlow = entityFlows?.find(i => i.title === flow)

        return entityFlow && <Progress
            percent={entityFlow.completionPercent}
            redToGreen
        />
    }

    if (!entityStages || entityStages?.length === 0) {
        return null
    }

    return <div
        className="flex flex-col gap-2"
        full={full?.toString()}
        {...rest}
    >
        {
            flows.map(flow => <LabelValue
                counterContent={getCounterJsx(flow)}
                key={flow}
                label={getTitle(flow)}
                value={getStagesJsx(flow)}
                vertical
            />)
        }
    </div>
}

export default EntityStagesProperty
