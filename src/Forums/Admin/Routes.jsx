import Boards from "./Board/List"
import DiscussionPosts from "./DiscussionPost/List"
import Discussions from "./Discussion/List"
import Forums from "./Forum/List"

const ForumsRoutes = [
    {
        path: "/forums/forums",
        component: Forums
    },
    {
        path: "/forums/boards",
        component: Boards
    },
    {
        path: "/forums/discussions",
        component: Discussions
    },
    {
        path: "/forums/discussionPosts",
        component: DiscussionPosts
    },

]

export default ForumsRoutes
