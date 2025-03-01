import { useState } from "react"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import { DialogContext } from "Contexts"
import { ListAction } from "List"
import { DialogForm } from "Form"
import AttributeField from "./Field"

const inputs = extraInputs => <>
    <AttributeField />
    {extraInputs}
</>

const AddAttributeListAction = ({
    extraInputs,
    ...rest
}) => {

    const [open, setOpen] = useState(false)

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <DialogForm
            title="AttributesAddFromExistingAttributes"
            inputs={inputs(extraInputs)}
            {...rest}
        />
        <ListAction
            title="InfraAdd"
            icon={FactCheckIcon}
            onClick={() => setOpen(true)}
        />
    </DialogContext.Provider>
}

export default AddAttributeListAction
