import { useContext } from "react"
import { EntityContext } from "Contexts"
import { localizedSiteUrl } from "App"
import {
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const Title = () => {
    const { entity } = useContext(EntityContext)
    return <TitleSubtitle
        link={`${localizedSiteUrl()}/product/${entity.slug}`}
        subtitle={entity.slug}
        title={<ValueWithTitle
            value={entity.title}
            title={entity.summary}
        />}
    />
}

export default Title
