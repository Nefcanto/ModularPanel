import { localizedSiteUrl } from "App"
import {
    BooleanProperty,
    Image,
    TitleSubtitle,
} from "List"

const RowPattern = entity => {
    const idService = entity.servicesServiceId ?? entity.id
    const isReload = entity.relatedItems.entityType != "Service"
    return <>
        <Image />
        <TitleSubtitle
            link={`${localizedSiteUrl()}/Service/${entity.slug}`}
            subtitle={entity.subtitle}
            title={entity.supertitle}
        />
        <BooleanProperty
            value={entity.isActive}
            actionUrl={`/service/toggleBoolean?id=${idService}&property=isActive`}
            reloadListOnSuccess={isReload}
        />
        <BooleanProperty
            value={entity.isPublished}
            actionUrl={`/service/toggleBoolean?id=${idService}&property=isPublished`}
            reloadListOnSuccess={isReload}
        />
        <BooleanProperty
            value={entity.featured}
            actionUrl={`/service/toggleBoolean?id=${idService}&property=Featured`}
            reloadListOnSuccess={isReload}
        />
    </>
}

export default RowPattern
