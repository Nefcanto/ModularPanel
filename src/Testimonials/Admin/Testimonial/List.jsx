import {
    BooleanProperty,
    Image,
    List,
} from "List"
import { EditPerson } from "Contacts"
import { AssignEntityTypeSettings } from "Settings"
import TestimonialForm from "./Form"

const listActions = <>
    <AssignEntityTypeSettings />
</>

const headers = <>
    <th>ContactsPerson</th>
    <th>TestimonialsVideoPoster</th>
    <th>TestimonialsTestimonial</th>
    <th>TestimonialsIsFeatured</th>
</>

const row = entity => <>
    <Image />
    <Image
        property="VideoPosterGuid"
        url={entity?.relatedItems?.videoPosterUrl}
    />
    <td>
        {entity.displayName}
    </td>
    <BooleanProperty
        actionUrl={`/testimonial/toggleBoolean?id=${entity.id}&property=IsFeatured`}
        value={entity.isFeatured}
    />
</>

const entityActions = <>
    <EditPerson />
</>

const Authors = () => {
    return <List
        create={TestimonialForm}
        entityActions={entityActions}
        entityType="Testimonial"
        hasDelete
        headers={headers}
        listActions={listActions}
        row={row}
        title="TestimonialsTestimonials"
    />
}

export default Authors
