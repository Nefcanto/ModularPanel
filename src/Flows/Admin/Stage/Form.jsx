import {
    DialogForm,
    Percent,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Percent
        placeholder="FlowsPercentShareInFlow"
        property="PercentShareInFlow"
    />
</>

const StagesForm = () => {
    return <DialogForm
        entityType="Stage"
        hasEdit
        humanReadableEntityType="FlowsStages"
        inputs={inputs}
    />
}

export default StagesForm
