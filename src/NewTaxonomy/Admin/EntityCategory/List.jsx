import {
    List,
    Text,
} from "List"
import { CategoryFilter } from "NewTaxonomyCommon"

const filters = <>
    <Text
        placeholder="InfraEntityGuid"
        property="EntityGuid"
    />
    <CategoryFilter />
</>

const headers = <>
    <th>InfraKey</th>
    <th>InfraEntity</th>
</>

const row = entity => <>
    <td>{entity.category}</td>
    <td>{entity.entityGuid}</td>
</>

const EntityCategories = () => {

    return <List
        entityType="EntityCategory"
        filters={filters}
        hasDelete
        headers={headers}
        row={row}
        title="NewTaxonomyEntityCategories"
    />
}

export default EntityCategories
