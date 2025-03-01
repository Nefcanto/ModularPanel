import { localizedSiteUrl } from "App"
import {
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const EpisodeTitle = entity => <TitleSubtitle
    link={`${localizedSiteUrl()}/episode/${entity.slug}`}
    subtitle={entity.slug}
    title={<ValueWithTitle
        value={entity.title?.cut(30)}
        title={entity.summary}
    />}
/>

export default EpisodeTitle
