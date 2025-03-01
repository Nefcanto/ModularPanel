import { useContext } from "react"
import { localizedSiteUrl } from "App"
import { EntityContext } from "Contexts"
import {
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const AdvertisementTitle = () => {

    const { entity } = useContext(EntityContext)

    return <TitleSubtitle
        link={`${localizedSiteUrl()}/advertisement/${entity.slug}`}
        subtitle={entity.slug}
        title={<ValueWithTitle
            title={entity.summary}
            value={entity.title.cut(30)}
        />}
    />
}

export default AdvertisementTitle
