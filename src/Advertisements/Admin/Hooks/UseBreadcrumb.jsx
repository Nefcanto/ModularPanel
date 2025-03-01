import AdvertisementRoutes from "../Routes"
import {
    containing,
    url,
} from "App"

const useAdvertisementsBreadcrumb = ({
    path,
    query,
    parent
}) => {

    const isModuleRoute = AdvertisementRoutes.find(i => i.path == path)

    const entityType = query["entityType"]?.toLowerCase()

    const hasModule = entityType == "Advertisement".toLowerCase() ||
        entityType == "AdvertisementContent".toLowerCase() ||
        query["module"]?.toLowerCase() == "Advertisement".toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "AdvertisementsAdvertisements",
                link: path !== "/advertisements/advertisements" && "/advertisements/advertisements"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/advertisements/advertisements",
                    filters: [
                        containing("title", parent.title)
                    ]
                })
            }
        ]
    }
}

export default useAdvertisementsBreadcrumb
