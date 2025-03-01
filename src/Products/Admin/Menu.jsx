import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const ProductsMenu = [
    {
        title: "ProductsProducts",
        icon: ShoppingCartIcon,
        children: [
            {
                title: "ProductsProducts",
                path: "/products/products"
            },
            {
                title: "UnitsUnits",
                path: "/units/units?entityType=product"
            },
            {
                title: "AttributesVariants",
                path: "/attributes/variants?module=products&entityType=product",
                superAdmin: true
            }
        ]
    }
]

export default ProductsMenu
