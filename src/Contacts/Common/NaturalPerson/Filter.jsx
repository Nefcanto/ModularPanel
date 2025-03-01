import { Browse } from "List"
import {
    headers,
    row
} from "./Browse"

const NaturalPersonFilter = ({
    choose,
    property,
}) => {
    return <Browse
        property={property || "NaturalPersonId"}
        entityType="NaturalPerson"
        headers={headers}
        row={row}
        placeholder="ContactsNaturalPerson"
        show={entity => entity.fullName}
        choose={choose || (entity => entity.id)}
    />
}

export default NaturalPersonFilter
