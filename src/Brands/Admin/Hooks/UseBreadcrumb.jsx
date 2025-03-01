import BrandsRoutes from "../Routes"
import {
    containing,
    url,
} from "App"

const useBrandsBreadcrumb = ({
    path,
    query,
    parent,
}) => {
    const isModuleRoute = BrandsRoutes.find(i => i.path === path)

    const hasModule = query["entityType"]?.toLowerCase() === "Brand"?.toLowerCase() || query["entityType"]?.toLowerCase() === "BrandContent"?.toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "BrandsBrands",
                link: path !== "/brands" && "/brands"
            },
            parent && {
                title: parent.originalName,
                link: url({
                    path: "/brands",
                    filters: [
                        containing("originalName", parent.originalName)
                    ]
                })
            }
        ]
    }
}

export default useBrandsBreadcrumb
