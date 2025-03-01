import {
    Enum,
    NumericRange,
} from "List"

const Filters = <>
    <Enum
        entityType="BlogState"
        placeholder="BlogState"
        property="State"
    />
    <NumericRange
        placeholder="BlogTimeToRead"
        property="TimeToRead"
    />
</>

export default Filters
