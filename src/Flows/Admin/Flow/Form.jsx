import {
    DialogForm,
    Title,
} from "Form"
import { GranularityField } from "Granularities"

const inputs = <>
    <GranularityField />
    <Title />
</>

const FlowsForm = () => {
    return <DialogForm
        entityType="Flow"
        humanReadableEntityType="FlowsFlow"
        inputs={inputs}
    />
}

export default FlowsForm
