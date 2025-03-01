import { DialogForm } from "Form"
import UserInputs from "./Inputs"

const UserForm = () => {
    return <DialogForm
        entityType="AdminUser"
        humanReadableEntityType="AccountsUser"
        inputs={UserInputs()}
    />
}

export default UserForm
