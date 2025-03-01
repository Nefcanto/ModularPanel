import {
    BooleanProperty,
    DateTimeTitleAgo,
    EnumProperty,
    Image,
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const Row = entity => {

    const styleProvider = enumKey => {
        switch (enumKey) {
            case "draft":
            default:
                return "bg-red-400 text-white"
            case "published":
                return "bg-green-400 dark:text-black"
        }
    }

    return <>
        <Image
            property="ThumbnailGuid"
            single
            url={entity.relatedItems.thumbnailUrl}
        />
        <TitleSubtitle
            subtitle={entity.slug}
            title={<ValueWithTitle
                title={entity.description}
                value={entity.title}
            />}
        />
        <td>
            {entity.durationInSecond}
        </td>
        <DateTimeTitleAgo
            ago={entity.relatedItems.lastUpdateTimeAgo || entity.relatedItems.timeAgo}
            date={entity.lastUpdateUtcDate || entity.utcDate}
        />
        <EnumProperty
            actionUrl={`/vlogVideo/changeState/${entity.id}`}
            currentKey={entity.state}
            currentKeyTranslation={entity.relatedItems.stateTranslation}
            currentStyle={styleProvider(entity.state)}
            enumeration="VlogState"
            property="State"
            styleProvider={styleProvider}
        />
        <BooleanProperty
            actionUrl={`/vlogVideo/toggleBoolean?id=${entity.id}&property=AcceptsComment`}
            value={entity.acceptsComment}
        />
    </>
}

export default Row
