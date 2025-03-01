import { localizedSiteUrl } from "App"
import {
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const ProjectTitle = entity => <TitleSubtitle
    link={`${localizedSiteUrl()}/project/${entity.slug}`}
    subtitle={entity.slug}
    title={<ValueWithTitle
        value={entity.title.cut(30)}
        title={entity.summary}
    />}
/>

export default ProjectTitle
