import { List } from "List"
import PostForm from "./Form"
import ListActions from "./ListActions"
import EntityActions from "./EntityActions"
import Filters from "./Filters"
import Headers from "./Headers"
import Row from "./Row"

const BlogPosts = () => {
    return <List
        create={PostForm}
        entityActions={EntityActions}
        entityType="BlogPost"
        filters={Filters}
        hasContent
        hasDelete
        hasEdit
        headers={Headers}
        listActions={ListActions}
        module="Blog"
        row={Row(false)}
        separateRowForActions
        title="BlogPosts"
    />
}

export default BlogPosts
