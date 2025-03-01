import { DialogForm } from "Form"
import { UserField } from "Accounts"

const inputs = <>
    <UserField
        choose={user => user.guid}
        title="TasksChooseDoer"
    />
</>

const DoerForm = () => {
    return <DialogForm
        entityType="Doer"
        inputs={inputs}
        title="TasksCreateDoer"
    />
}

export default DoerForm
