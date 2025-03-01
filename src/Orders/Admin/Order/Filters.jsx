import {
    PersonFilter,
    PersonTypeFilter,
} from "Contacts"
import { Enum } from "List"

const filters = <>
    <Enum
        entityType="OrderType"
        placeholder="InfraType"
        property="type"
    />
    <PersonFilter />
    <PersonTypeFilter />
</>

export default filters
