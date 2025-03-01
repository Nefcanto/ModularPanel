import {
    List,
    Text,
} from "List"

const filters = <>
    <Text
        placeholder="EntityType"
        property="entityType"
    />
    <Text
        placeholder="SeoPageTitle"
        property="pageTitle"
    />
    <Text
        placeholder="SeoMetaTitle"
        property="metaTitle"
    />
    <Text
        placeholder="SeoMetaDescription"
        property="metaDescription"
    />
</>

const headers = <>
    <th>ModulesModule</th>
    <th>ModulesEntityType</th>
    <th>SeoPageTitle</th>
    <th>SeoMetaTitle</th>
</>

const row = entity => <>
    <td>{entity.module}</td>
    <td>{entity.entityType}</td>
    <td>{entity.pageTitle}</td>
    <td>{entity.metaTitle}</td>
</>

const EntityParameters = () => {
    return <List
        contentEntityType="Parameter"
        edit={({ entity }) => `/seo/entity?module=${entity.module}&entityType=${entity.entityType}&entity=${entity.entityGuid}`}
        entityType="EntityParameter"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="SeoEntityParameters"
    />
}

export default EntityParameters
