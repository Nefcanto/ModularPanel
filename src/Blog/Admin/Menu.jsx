import ArticleIcon from "@mui/icons-material/Article"

const BlogMenu = [
    {
        title: "BlogBlog",
        icon: ArticleIcon,
        children: [
            {
                title: "BlogPosts",
                path: "/blog/posts"
            },
            {
                title: "BlogAuthors",
                path: "/blog/authors"
            },
            {
                title: "BlogSequences",
                path: "/blog/sequences"
            },
        ]
    }
]

export default BlogMenu
