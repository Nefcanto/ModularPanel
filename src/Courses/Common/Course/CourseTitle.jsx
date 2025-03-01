import { localizedSiteUrl } from "App"
import {
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const CourseTitle = entity => <TitleSubtitle
    link={`${localizedSiteUrl()}/course/${entity.slug}`}
    subtitle={entity.slug}
    title={<ValueWithTitle
        value={entity.title?.cut(30)}
        title={entity.summary}
    />}
/>

export default CourseTitle
