import {
    DialogForm,
    Title,
} from "Form"

const inputs = <>
    <Title />
</>

const BlockForm = <DialogForm
    entityType="Block"
    humanReadableEntityType="DashboardsBlock"
    inputs={inputs}
/>

export default BlockForm
