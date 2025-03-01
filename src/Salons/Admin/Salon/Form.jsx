import {
    Code,
    DialogForm,
    Slug,
} from "Form"
import { PlaceInputs } from "PlacesCommon"

const SalonForm = props => {
    const inputs = entity => <>
        <Slug />
        {PlaceInputs(entity)}
        <Code
            Placeholder="SalonsVideoTag"
            property="VideoTag"
        />
    </>
    return <DialogForm
        {...props}
        entityType="Salon"
        humanReadableEntityType="SalonsSalon"
        inputs={inputs}
    />
}

export default SalonForm
