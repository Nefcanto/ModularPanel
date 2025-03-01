import { useState } from "react"
import { DialogContext } from "Contexts"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import { ListAction } from "List"
import {
    DialogForm
} from "Form"
import UserField from "./Field"

const AddUserAction = props => {

    const [open, setOpen] = useState(false)

    const inputs = <>
        <UserField
            choose={i => i.personGuid}
            property="Person"
        />
        {
            props.inputs && props.inputs
        }
    </>

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <DialogForm
            {...props}
            inputs={inputs}
        />
        <ListAction
            title="AccountsAddFromUsers"
            icon={PeopleAltIcon}
            onClick={() => setOpen(true)}
        />
    </DialogContext.Provider>
}

export default AddUserAction
