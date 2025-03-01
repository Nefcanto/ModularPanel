import { GranularityFilter } from "GranularitiesCommon"
import { DataTypeFilter } from "DataTypesCommon"
import { ScopeFilter } from "ScopesCommon"

const filters = fixedGranularity => <>
    {
        !fixedGranularity &&
        <GranularityFilter />
    }
    <ScopeFilter />
    <DataTypeFilter />
</>

export default filters
