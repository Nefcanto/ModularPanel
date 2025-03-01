import EntitySnippets from "./EntitySnippet/List"
import ItemBlobs from "./Item/Blobs"
import ItemData from "./Item/Data"
import ItemParts from "./ItemPart/List"
import Items from "./Item/List"
import Layouts from "./Layout/List"
import Pages from "./Page/Tree"
import SectionBlobs from "./Section/Blobs"
import SectionData from "./Section/Data"
import SectionParts from "./SectionPart/List"
import Sections from "./Section/List"

const ContentsRoutes = [
    {
        path: "/layouts",
        component: Layouts
    },
    {
        path: "/pages",
        component: Pages
    },
    {
        path: "/sections",
        component: Sections
    },
    {
        path: "/sectionParts",
        component: SectionParts
    },
    {
        path: "/section/data",
        component: SectionData
    },
    {
        path: "/section/blobs",
        component: SectionBlobs
    },
    {
        path: "/section/items",
        component: Items
    },
    {
        path: "/section/itemParts",
        component: ItemParts
    },
    {
        path: "/section/item/data",
        component: ItemData
    },
    {
        path: "/section/item/blobs",
        component: ItemBlobs
    },
    {
        path: "/entitySnippets",
        component: EntitySnippets
    },
]

export default ContentsRoutes
