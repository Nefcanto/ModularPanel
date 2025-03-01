import {
    Browse,
    filterOperator,
    Text,
} from "List"

const headers = <>
    <td>InfraName</td>
</>

const filters = <>
    <Text
        property="DisplayName"
        placeholder="InfraName"
    />
</>

const row = entity => <>
    <td>{entity.displayName}</td>
</>

const AuthorFilter = () => {
    return <Browse
        entityType="Author"
        property="authorSlugsCsv"
        placeholder="BlogAuthor"
        filters={filters}
        headers={headers}
        row={row}
        show={entity => entity.displayName}
        choose={entity => entity.slug}
        operator={filterOperator.containing}
    />
}

export default AuthorFilter
