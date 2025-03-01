import {
    BooleanProperty,
    List,
} from "List"
import SystemContentPolicyForm from "./Form"
import valueFilter from "../ValueFilter"
import PolicyFilter from "../Policy/Filter"

const filters = <>
    <PolicyFilter />
    {valueFilter}
</>

const headers = <>
    <th>InfraKey</th>
    <th>InfraTitle</th>
    <th>InfraValue</th>
</>

const row = entity => <>
    <td>{entity.contentPoliciesPolicyKey}</td>
    <td>{entity.contentPoliciesPolicyTitle}</td>
    <BooleanProperty
        value={entity.value}
        nullable
    />
</>

const SystemPolicies = () => {
    return <List
        title="ContentPoliciesSystemContentPolicies"
        entityType="SystemContentPolicy"
        filters={filters}
        headers={headers}
        row={row}
        upsert={SystemContentPolicyForm}
        hasDelete
        hasEdit
    />
}

export default SystemPolicies
