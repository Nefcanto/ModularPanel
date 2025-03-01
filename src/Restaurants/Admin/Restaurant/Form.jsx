import {
    DialogForm,
    Slug,
} from "Form"
import { PlaceInputs } from "PlacesCommon"

const inputs = entity => <>
    <Slug />
    {PlaceInputs(entity)}
</>

const RestaurantForm = <DialogForm
    entityType="Restaurant"
    humanReadableEntityType="RestaurantsRestaurant"
    inputs={inputs}
/>

export default RestaurantForm
