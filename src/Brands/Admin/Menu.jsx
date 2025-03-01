import VerifiedIcon from "@mui/icons-material/Verified"

const BrandsMenu = [
    {
        title: "BrandsBrands",
        icon: VerifiedIcon,
        children: [
            {
                title: "BrandsBrands",
                path: "/brands"
            },
            {
                title: "NewTaxonomyCategories",
                path: "/brand/hierarchies?entityType=brand"
            },
        ]
    }
]

export default BrandsMenu
