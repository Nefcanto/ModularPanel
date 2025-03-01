import { DialogForm } from "Form"
import TemplateField from "./Field"

const inputs = <>
    {TemplateField}
</>

const TemplateDialog = ({ entity }) => {
    return <DialogForm
        entityType={entity.relatedItems.entityType}
        inputs={inputs}
        title="InfraChoose"
    />
}

export default TemplateDialog
