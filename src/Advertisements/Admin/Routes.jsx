import {
    AdvertisementContacts,
    AdvertisementPlaces
} from "AdvertisementsCommon"
import Advertisements from "./Advertisement/List"

const AdvertisementsRoutes = [
    {
        path: "/advertisements/advertisements",
        component: Advertisements
    },
    {
        path: "/advertisements/advertisementPlaces",
        component: AdvertisementPlaces
    },
    {
        path: "/advertisements/advertisementContacts",
        component: AdvertisementContacts
    }
]

export default AdvertisementsRoutes
