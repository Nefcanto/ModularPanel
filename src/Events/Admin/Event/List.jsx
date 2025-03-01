import {
    DateTime,
    Enum,
    EnumProperty,
    Image,
    List,
    Title,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import EntityActions from "./EntityActions"
import EventForm from "./Form"

const filters = <>
    <Title />
    <Enum
        entityType="EventState"
        placeholder="EventsEventState"
        property="EventState"
    />
</>

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th>InfraDate</th>
    <th>EventsEventState</th>
</>

const row = entity => {

    const styleProvider = enumKey => {
        let baseStyle = "text-white "
        switch (enumKey.toLowerCase()) {
            case "planned":
                return baseStyle + "bg-blue-400"
            case "suspended":
                return baseStyle + "bg-orange-400"
            case "held":
                return baseStyle + "bg-green-400"
            case "cancelled":
                return baseStyle + "bg-red-400"
            default:
                return baseStyle + "bg-red-400"
        }
    }

    return <>
        <Image />
        <TitleSubtitle
            subtitle={entity.slug}
            title={<ValueWithTitle
                title={entity.description}
                value={entity.title.cut(30)}
            />}
        />
        <DateTime date={entity.utcDate} />
        <EnumProperty
            actionUrl={`/event/changeState/${entity.id}`}
            currentKey={entity.eventState}
            currentKeyTranslation={entity.relatedItems.eventStateTranslation}
            currentStyle={styleProvider(entity.eventState)}
            enumeration="EventState"
            property="EventState"
            styleProvider={styleProvider}
        />
    </>

}

const Events = () => {
    return <List
        create={EventForm}
        entityActions={EntityActions}
        entityType="Event"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="EventsEvents"
    />
}

export default Events
