import { Boolean } from "List"
import { GranularityFilter } from "Granularities"
import { DataTypeFilter } from "DataTypes"

const filters = <>
    <GranularityFilter />
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
    <Boolean
        label="AttributesHasUnits"
        property="HasUnits"
    />
</>

export default filters
