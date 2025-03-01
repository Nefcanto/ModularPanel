import { DialogForm } from "Form"
import { UserInputs } from "Accounts"

const RangeManagerForm = props => {
    return <DialogForm
        {...props}
        humanReadableEntityType="PropertiesRangeManager"
        entityType="RangeManager"
        inputs={UserInputs()}
    />
}

export default RangeManagerForm
