import {
    filterOperator,
    List,
    Text,
} from "List"

const filters = <>
    <Text
        property="LookupIdentifier"
        placeholder="InfraId"
        operator={filterOperator.equalTo}
    />
</>

const headers = <>
    <th>InfraName</th>
    <th>InfraKey</th>
</>

const row = entity => <>
    <td>{entity.name}</td>
    <td>{entity.lookupIdentifier}</td>
</>

const LookupIds = () => {
    return <List
        title="BenchmarksLookupIds"
        entityType="LookupId"
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default LookupIds
