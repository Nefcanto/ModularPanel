import { Browse } from "Form"
import {
    headers,
    row
} from "./Browse"

const NaturalPersonField = ({
    choose,
    identifyingProperty,
    property,
    ...rest
}) => {

    const handleChoose = entity => {
        if (choose) {
            return choose(entity)
        }
        return entity.id
    }

    return <Browse
        choose={entity => handleChoose(entity)}
        entityType="NaturalPerson"
        headers={headers}
        identifyingProperty={identifyingProperty}
        placeholder="ContactsNaturalPerson"
        property={property ?? "NaturalPersonId"}
        required
        row={row}
        show={entity => entity.fullName}
        {...rest}
    />
}

export default NaturalPersonField
