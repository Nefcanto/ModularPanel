import { Browse } from "Form"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"

const PostField = () => {
    return <Browse
        byGuid
        choose={entity => entity.guid}
        entityType="BlogPost"
        filters={filters}
        headers={headers}
        placeholder="BlogPost"
        property="PostGuid"
        row={row(true)}
        show={entity => entity.title}
    />
}

export default PostField
