import { Places } from "Places"
import EntityActions from "./EntityActions"
import ListActions from "./ListActions"

const AdvertisementPlaces = () => {

    return <Places
        entityType="AdvertisementPlace"
        entityActions={EntityActions}
        listActions={ListActions}
    />
}

export default AdvertisementPlaces
