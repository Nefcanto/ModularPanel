import Authors from "./Author/List"
import BlogPosts from "./Post/List"
import SequencePosts from "./SequencePost/List"
import Sequences from "./Sequence/List"

const BlogRoutes = [
    {
        path: "/blog/posts",
        component: BlogPosts
    },
    {
        path: "/blog/authors",
        component: Authors
    },
    {
        path: "/blog/sequences",
        component: Sequences
    },
    {
        path: "/blog/sequence/posts",
        component: SequencePosts
    }
]

export default BlogRoutes
