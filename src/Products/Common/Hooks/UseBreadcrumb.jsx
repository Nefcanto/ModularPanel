// import { ProductsRoutes } from "Products"
import {
    containing,
    equalTo,
    url,
} from "App"

const useProductsBreadcrumb = ({
    path,
    query,
    parent,
}) => {
    const isModuleRoute = false //ProductsRoutes.find(i => i.path === path)
    const hasModule = query["module"]?.toLowerCase() === "products" || query["entityType"]?.toLowerCase() === "product" || query["entityType"]?.toLowerCase() === "ProductContent".toLowerCase()
    if (isModuleRoute || hasModule) {
        return [
            {
                title: "ProductsProducts",
                link: path !== "/products/products" && "/products/products"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/products/products",
                    filters: [
                        equalTo("id", parent.id)
                    ]
                })
            }
        ]
    }
}

export default useProductsBreadcrumb
