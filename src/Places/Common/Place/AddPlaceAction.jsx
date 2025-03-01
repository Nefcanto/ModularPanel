import { useState } from "react"
import { DialogContext } from "Contexts"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import { ListAction } from "List"
import { DialogForm } from "Form"
import PlaceField from "./Field"

const AddPlaceAction = ({
    entityType,
    property,
    ...rest
}) => {

    const [open, setOpen] = useState(false)

    const inputs = entity => <>
        <PlaceField
            entityType={entityType}
            property={property}
            choose={i => i.guid}
        />
    </>

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <DialogForm
            entityType={entityType}
            {...rest}
            inputs={inputs}
        />
        <ListAction
            title="Add from places"
            icon={PeopleAltIcon}
            onClick={() => setOpen(true)}
        />
    </DialogContext.Provider>
}

export default AddPlaceAction
