import { DialogForm } from "Form"
import RangeManagerField from "../RangeManager/Field"

const AssignToRangeManagerDialog = () => {

    const inputs = entity => <>
        <RangeManagerField entityId={entity.id} />
    </>

    return <DialogForm
        title="PropertiesAssignToRangeManager"
        entityType="Agent"
        inputs={inputs}
        alwaysEdit
    />
}

export default AssignToRangeManagerDialog
