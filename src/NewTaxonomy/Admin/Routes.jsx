import EntityCategories from "./EntityCategory/List"
import CategoryTree from "./Category/Tree"
import Tags from "./Tag/List"
import Taxonomy from "./Taxonomy"

const NewTaxonomyRoutes = [
    {
        path: "/taxonomy",
        component: Taxonomy
    },
    {
        path: "/taxonomy/categories",
        component: CategoryTree
    },
    {
        path: "/entityCategories",
        component: EntityCategories
    },

    {
        path: "/taxonomy/tags",
        component: Tags
    },
]

export default NewTaxonomyRoutes
