import { Check } from "Form"
import PolicyField from "./Policy/Field"

const inputs = <>
    <PolicyField />
    <Check
        property="Value"
        placeholder="InfraValue"
        nullable
        trueLabel="ContentPoliciesActive"
        falseLabel="ContentPoliciesInactive"
    />
</>

export default inputs
