import { DialogForm } from "Form"
import { GranularityField } from "Granularities"

const inputs = <>
    <GranularityField />
</>

const GlobalEntityTypeForm = <DialogForm
    entityType="GlobalEntityType"
    humanReadableEntityType="TenantsGlobalEntityType"
    inputs={inputs}
/>

export default GlobalEntityTypeForm
