import { AddPlaceAction } from "Places"

const ListActions = <>
    <AddPlaceAction
        entityType="AdvertisementPlace"
        property="Place"
        submitTo="/advertisementPlace/setPlace"
    />
</>

export default ListActions
