import {
    DateTime,
    DialogForm,
    LongText,
    Slug,
    Title,
} from "Form"
import { PlaceField } from "Places"

const inputs = entity => <>
    <Title />
    <Slug />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
    <DateTime
        placeholder="InfraDate"
        property="Date"
        value={entity?.utcDate}
    />
    <PlaceField
        choose={entity => entity.guid}
        property="Place"
    />
</>

const EventForm = props => {

    return <DialogForm
        {...props}
        entityType="Event"
        humanReadableEntityType="Event"
        inputs={inputs}
        title="EventsEvent"
    />
}

export default EventForm
