import {
    Image,
    List,
} from "List"
import { PlaceRow } from "Places"
import EntityActions from "./EntityActions"
import SalonForm from "./Form"
import SalonListActions from "./ListActions"

const headers = <>
    <th>InfraLogo</th>
    <th></th>
    <th start>InfraTitle</th>
    <th>PlacesWorkingHours</th>
    <th>PlacesIsActive</th>
    <th>PlacesIsFeatured</th>
    <th>GeoCityDivision</th>
    <th>SocialVisitCount</th>
</>

const row = entity => {
    const rowPlace = PlaceRow(entity)
    return <>
        <Image
            uploadUrl={`/salon/setLogo?id=${entity.id}`}
            url={entity.relatedItems?.logoUrl}
        />
        {rowPlace.props.children}
        <td>
            {entity.geoCityDivisionName}
        </td>
        <td>
            {entity.relatedItems.hasVisitCounts ? entity.relatedItems.visitCounts[0].count : 0}
        </td>
    </>
}

const Salons = props => {
    return <List
        contentEntityType="Contact"
        contentIdChooser={entity => entity.contactsContactId}
        contentModule="Contacts"
        create={SalonForm}
        entityActions={EntityActions}
        entityType="Salon"
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        listActions={SalonListActions}
        module="Salons"
        row={row}
        separateRowForActions
        title="SalonsSalons"
        {...props}
    />
}

export default Salons
