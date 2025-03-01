import { localizedSiteUrl } from "App"
import {
    BooleanProperty,
    DateTimeTitleAgo,
    EnumProperty,
    Image,
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const Row = browse => entity => {

    const styleProvider = state => {
        switch (state?.toLowerCase()) {
            case "draft":
            default:
                return "bg-red-400 text-white dark:text-black"
            case "published":
                return "bg-green-400 dark:text-black"
        }
    }

    return <>
        {
            browse
                ?
                <Image readOnly />
                :
                <Image />
        }
        <TitleSubtitle
            subtitle={entity.slug}
            link={`${localizedSiteUrl()}/post/${entity.slug}`}
            title={<ValueWithTitle
                title={entity.summary}
                value={entity.title.cut(30)}
            />}
        />
        <DateTimeTitleAgo
            ago={entity.relatedItems.timeAgo}
            date={entity.utcDate}
        />

        <DateTimeTitleAgo
            ago={entity.relatedItems.lastUpdateTimeAgo || entity.relatedItems.timeAgo}
            date={entity.lastUpdateUtcDate || entity.utcDate}
        />

        {
            browse
                ?
                <EnumProperty
                    currentKey={entity.relatedItems.stateTranslation}
                    currentStyle={styleProvider(entity.state)}
                    enumeration="BlogState"
                    property="State"
                    styleProvider={styleProvider}
                />
                :
                <EnumProperty
                    actionUrl={`/blogPost/changeState/${entity.id}`}
                    currentKey={entity.state}
                    currentKeyTranslation={entity.relatedItems.stateTranslation}
                    currentStyle={styleProvider(entity.state)}
                    enumeration="BlogState"
                    property="State"
                    styleProvider={styleProvider}
                />
        }
        {
            browse
                ?
                <BooleanProperty
                    value={entity.acceptsComment}
                />
                :
                <BooleanProperty
                    actionUrl={`/blogPost/toggleBoolean?id=${entity.id}&property=AcceptsComment`}
                    value={entity.acceptsComment}
                />
        }
    </>
}

export default Row
