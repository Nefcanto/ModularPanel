import {
    BooleanProperty,
    List,
} from "List"
import {
    ModuleFilter,
    ModuleProperty,
} from "ModulesCommon"
import ModuleContentPolicyForm from "./Form"
import valueFilter from "../ValueFilter"

const filters = <>
    <ModuleFilter />
    {valueFilter}
</>

const headers = <>
    <th>InfraModule</th>
    <th>InfraKey</th>
    <th>InfraTitle</th>
    <th>InfraValue</th>
</>

const row = entity => <>
    <td>
        <ModuleProperty />
    </td>
    <td>{entity.contentPoliciesPolicyKey}</td>
    <td>{entity.contentPoliciesPolicyTitle}</td>
    <BooleanProperty
        nullable
        value={entity.value}
    />
</>

const ModuleContentPolicies = () => {
    return <List
        title="ContentPoliciesModuleContentPolicies"
        entityType="ModuleContentPolicy"
        filters={filters}
        headers={headers}
        row={row}
        upsert={ModuleContentPolicyForm}
        hasDelete
        hasEdit
    />
}

export default ModuleContentPolicies
