import PlaceImages from "./Place/Images"
import { Places } from "PlacesCommon"

const PlacesRoutes = [
    {
        path: "/places",
        component: Places
    },
    {
        path: "/place/images",
        component: PlaceImages
    }
]

export default PlacesRoutes
