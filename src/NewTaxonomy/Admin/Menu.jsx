import AccountTreeIcon from "@mui/icons-material/AccountTree"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import AcUnitIcon from "@mui/icons-material/AcUnit"

const NewTaxonomyMenu = [
    {
        title: "NewTaxonomyTaxonomy",
        icon: AcUnitIcon,
        path: "/taxonomy"
    },
    {
        title: "NewTaxonomyCategories",
        icon: AccountTreeIcon,
        children: [
            {
                title: "NewTaxonomyCategories",
                path: "/taxonomy/categories"
            },
            {
                title: "InfraEntity",
                path: "/entityCategories",
            },
        ]
    },
    {
        title: "NewTaxonomyTags",
        icon: LocalOfferIcon,
        children: [
            {
                title: "NewTaxonomyTags",
                path: "/taxonomy/tags"
            },
            {
                title: "InfraEntity",
                path: "/entityTags",
            },
        ]
    }
]

export default NewTaxonomyMenu
