import {
    BooleanProperty,
    Image,
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const Row = entity => <>
    <Image />
    <TitleSubtitle
        subtitle={entity.slug}
        title={<ValueWithTitle
            value={entity?.title?.cut(30)}
            title={entity?.summary}
        />}
    />
    <td>
        {entity?.workingHours}
    </td>
    <BooleanProperty
        actionUrl={`/place/toggleBoolean?id=${entity.placesPlaceId ?? entity.id}&property=isActive`}
        reloadFrom={`/${entity.relatedItems.entityType}/get/${entity.id}`}
        value={entity?.isActive}
    />
    <BooleanProperty
        actionUrl={`/place/toggleBoolean?id=${entity.placesPlaceId ?? entity.id}&property=isFeatured`}
        reloadFrom={`/${entity.relatedItems.entityType}/get/${entity.id}`}
        value={entity?.isFeatured}
    />

</>

export default Row
