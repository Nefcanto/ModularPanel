import {
    Image,
    List,
    Title,
} from "List"
import { PlaceRow } from "Places"
import EntityActions from "./EntityActions"
import RestaurantForm from "./Form"

const filters = <>
    <Title />
</>

const headers = <>
    <th>InfraLogo</th>
    <th></th>
    <th start>InfraTitle</th>
    <th>PlacesWorkingHours</th>
    <th>PlacesIsActive</th>
    <th>PlacesIsFeatured</th>
</>

const row = entity => {
    const rowPlace = PlaceRow(entity)
    return <>
        <Image
            property="LogoGuid"
            url={entity?.relatedItems?.logoUrl}
        />
        {rowPlace.props.children}
    </>
}

const Restaurants = <List
    create={RestaurantForm}
    entityActions={EntityActions}
    entityType="Restaurant"
    filters={filters}
    hasContent
    hasDelete
    hasEdit
    headers={headers}
    module="Restaurants"
    row={row}
    title="RestaurantsRestaurants"
/>

export default Restaurants
