import {
    useEffect,
    useState,
} from "react"
import {
    appendQueryToApiUrl,
    get,
    t,
    url,
} from "App"
import { useMessage } from "Hooks"
import {
    Checks,
    DialogForm,
    Select,
} from "Form"

const EntityStageForm = () => {

    const [progress, setProgress] = useState(true)
    const [flows, setFlows] = useState([])
    const [hasFlows, setHasFlows] = useState(false)
    const [multiFlow, setMultiFlow] = useState(false)
    const [stages, setStages] = useState([])
    const { error } = useMessage()

    const apiUrl = url({
        extractGranularityFromQuery: true,
        granularity: "entityType",
        path: "/flows/data",
    })

    const loadStages = () => {
        setProgress(true)
        get(apiUrl)
            .then(data => {
                setProgress(false)
                const {
                    flows,
                    hasFlows,
                    multiFlow
                } = data
                setHasFlows(hasFlows)
                setFlows(flows)
                setMultiFlow(multiFlow)
                if (hasFlows && !multiFlow) {
                    setStages(flows[0].relatedItems.nonAssignedStages)
                }
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const findAndSetStages = flow => {
        const foundFlow = flows.find(i => i.key === flow)
        const stages = foundFlow?.relatedItems?.nonAssignedStages
        setStages(stages)
    }

    const inputs = hasFlows
        ?
        <>
            {
                multiFlow &&
                <Select
                    choose={i => i.key}
                    display={i => i.title}
                    onChange={findAndSetStages}
                    options={flows}
                    placeholder="FlowsFlow"
                    progress={progress}
                    property="Stage"
                />
            }
            {/* <Select
                autocomplete
                choose={i => i.key}
                display={i => i.title}
                options={stages}
                placeholder="FlowsStage"
                progress={progress}
                property="Target"
            /> */}
            <Checks
                choose={i => i.key}
                items={stages}
                property="Targets"
                show={i => i.title}
            />
        </>
        :
        <div>{t("FlowsNoFlowIsFound")}</div>

    return <DialogForm
        entityType="EntityStage"
        humanReadableEntityType="FlowsStage"
        inputs={inputs}
        onOpened={loadStages}
        progress={progress}
        submitTo="/entityStage/addStages"
    />
}

export default EntityStageForm
