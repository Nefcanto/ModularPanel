import GranularityProperty from "GranularityProperty"
import { DataTypeProperty } from "DataTypes"
import { ScopeProperty } from "Scopes"

const row = fixedGranularity => entity => <>
    {
        !fixedGranularity &&
        <GranularityProperty />
    }
    <ScopeProperty />
    <td>{entity.title}</td>
    <DataTypeProperty />
</>

export default row
