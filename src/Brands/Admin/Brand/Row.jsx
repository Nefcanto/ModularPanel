import { localizedSiteUrl } from "App"
import {
    BooleanProperty,
    Image,
    SvgProperty,
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const Row = entity => <>
    <Image
        single
        property="Logo"
    />
    <TitleSubtitle
        link={`${localizedSiteUrl()}/brand/${entity.slug}`}
        subtitle={entity.slug}
        title={<ValueWithTitle
            title={entity.summary}
            value={entity.originalName?.cut(30)}
        />}
    />
    <td>{entity.localizedName}</td>
    <SvgProperty
        actionUrl={`/brand/setSvg?id=${entity.id}`}
        value={entity.logoSvg}
    />
    <BooleanProperty
        actionUrl={`/brand/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
</>

export default Row
