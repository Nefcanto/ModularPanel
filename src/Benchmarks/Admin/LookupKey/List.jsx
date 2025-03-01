import {
    filterOperator,
    List,
    Text,
} from "List"

const filters = <>
    <Text
        property="LookupKeyValue"
        placeholder="InfraKey"
        operator={filterOperator.equalTo}
    />
</>

const headers = <>
    <th>InfraName</th>
    <th>InfraKey</th>
</>

const row = entity => <>
    <td>{entity.name}</td>
    <td>{entity.lookupKeyValue}</td>
</>

const LookupKeys = () => {
    return <List
        title="BenchmarksLookupKeys"
        entityType="LookupKey"
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default LookupKeys
