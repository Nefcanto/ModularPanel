import { DialogForm } from "Form"
import { ModuleField } from "ModulesCommon"
import inputs from "../Inputs"

const ModuleContentPolicyForm = <DialogForm
    entityType="ModuleContentPolicy"
    humanReadableEntityType="ContentPoliciesPolicy"
    inputs={<>
        <ModuleField />
        {inputs}
    </>}
/>

export default ModuleContentPolicyForm
