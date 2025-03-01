import {
    List,
    Text,
} from "List"

const filters = <>
    <Text
        placeholder="SeoPath"
        property="Path"
    />
</>

const headers = <>
    <th>SeoPath</th>
    <th>SeoPageTitle</th>
    <th>SeoMetaTitle</th>
</>

const row = entity => <>
    <td dir="ltr">{entity.path}</td>
    <td>{entity.pageTitle}</td>
    <td>{entity.metaTitle}</td>
</>

const PathParameters = <List
    contentEntityType="ParameterContent"
    create="/seo/pathParameters/upsert"
    edit={({ entity }) => `/seo/pathParameters/upsert?id=${entity.id}`}
    entityType="PathParameter"
    filters={filters}
    hasContent
    hasDelete
    headers={headers}
    row={row}
    title="SeoPaths"
/>

export default PathParameters
