import { DialogForm } from "Form"
import PlaceInputs from "./Inputs"

const PlaceForm = ({
    entityType,
    ...rest
}) => {
    return <DialogForm
        {...rest}
        entityType={entityType ?? "place"}
        inputs={PlaceInputs}
    />
}

export default PlaceForm
