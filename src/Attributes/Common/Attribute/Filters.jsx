import { Boolean } from "List"
// import { GranularityFilter } from "GranularitiesCommon"
import { DataTypeFilter } from "DataTypesCommon"

const filters = <>
    {/* <GranularityFilter /> */}
    <DataTypeFilter />
    <Boolean
        label="AttributesFilterable"
        property="Filterable"
    />
    <Boolean
        label="AttributesCreatesVariant"
        property="CreatesVariant"
    />
    <Boolean
        label="AttributesAffectsValue"
        property="AffectsValue"
    />
    <Boolean
        label="AttributesIsMain"
        property="IsMain"
    />
    <Boolean
        label="AttributesComparable"
        property="Comparable"
    />
</>

export default filters
