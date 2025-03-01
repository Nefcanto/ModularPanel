import {
    Boolean,
    Enum,
    NumericRange,
    Text,
} from "List"
import {
    AgentFilter,
    DealTypeFilter,
    PropertyTypeFilter,
} from "PropertiesCommon"

const Filters = <>
    <PropertyTypeFilter />
    <DealTypeFilter />
    <Text
        placeholder="GeoCityDivision"
        property="cityDivisionName"
    />
    <Enum
        entityType="PropertyState"
        placeholder="PropertiesPropertyState"
        property="PropertyState"
    />
    <AgentFilter />
    <Boolean
        label="PropertiesHasParking"
        property="HasParking"
    />
    <Boolean
        label="PropertiesIsOccasion"
        property="IsOccasion"
    />
    <Boolean
        label="PropertiesIsFeatured"
        property="IsFeatured"
    />
    <NumericRange
        placeholder="PropertiesArea"
        property="Area"
    />
    <NumericRange
        placeholder="PropertiesMajorPrice"
        property="MajorPrice"
    />
    <NumericRange
        placeholder="PropertiesMinorPrice"
        property="MinorPrice"
    />
</>

export default Filters
