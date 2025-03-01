import { parseQuery } from "App"
import {
    List,
    Text,
} from "List"
import { EntityFaqPage } from "SeoCommon"

const filters = <>
    <Text
        placeholder="SeoSortedParameters"
        property="sortedParameters"
    />
</>

const headers = <>
    <th>ModulesEntityType</th>
    <th>SeoPageTitle</th>
    <th>SeoMetaTitle</th>
    <th>SeoSortedParameters</th>
</>

const row = entity => <>
    <td>{entity.entityType}</td>
    <td>{entity.pageTitle}</td>
    <td>{entity.metaTitle}</td>
    <td>{entity.sortedParameters}</td>
</>

const entityActions = entity => <>
    <EntityFaqPage
        entityType="parameter"
    />
</>

const QueryParameters = () => {
    const {
        entityType,
        module,
    } = parseQuery()
    const queryString = window.location.search.replace("?", "")

    return <List
        contentEntityType="ParameterContent"
        create={`/seo/query/upsert?module=${module}&entityType=${entityType}&returnTo=${encodeURIComponent(`/seo/queries?${queryString}`)}`}
        edit={({ entity }) => `/seo/query/upsert?module=${module}&entityType=${entityType}&${entity.sortedParameters}&returnTo=${encodeURIComponent(`/seo/queries?${queryString}`)}`}
        entityActions={entityActions}
        entityType="QueryParameter"
        filters={filters}
        hasContent
        hasDelete
        headers={headers}
        row={row}
        title="SEO Path Parameters"
    />
}

export default QueryParameters
