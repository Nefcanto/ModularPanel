import {
    DateTime,
    DialogForm,
    LongText,
} from "Form"

const inputs = <>
    <DateTime
        placeholder="InfraDate"
        property="StartDate"
        required
    />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
</>

const EntityStageEditForm = <DialogForm
    entityType="EntityStage"
    humanReadableEntityType="FlowsStage"
    inputs={inputs}
    submitTo="/entityStage/setDateAndDescription"
/>

export default EntityStageEditForm
